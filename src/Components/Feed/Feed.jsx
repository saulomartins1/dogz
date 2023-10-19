import React from 'react'
import FeedPhotos from './FeedPhotos'
import FeedModal from './FeedModal'

function Feed({ user }) {

    const [modalPhoto, setModalPhoto] = React.useState(null);
    const [pages, setPages] = React.useState([1]); //#2 (1/3) - Quantidade de páginas (1 inicialmente);
    const [infinite, setInfinite] = React.useState(true); //#3 (1/3) - Infinite: Verifica se o scroll ainda pode ser Infinito;



    React.useEffect(() => {
        // #4 (1/3) - wait: criada para evitar flood da função de setPages
        let wait = false;

        function infiniteScroll() {
            const scroll = window.scrollY; //#1 (1/3) - Distância da scroll bar atual para o topo;
            const height = document.body.offsetHeight - window.innerHeight; //#1 (2/3) - Altura total do elemento body (- menos) altura da janela do navegador;
            if (infinite) {
                // #1 (3/3) - Se o scroll for maior que 75% da altura (height) da parte invisível da pagina...
                // #4 (2/3)
                if (scroll > height * .75 && !wait) {

                    // #5 (FINAL) - Desestrutura array com a quantidade de pages no momento [1, 2, 3, ...] e adiciona +1 item na array; [4, 5, 6]
                    setPages((pagesAnterior) => [...pagesAnterior, pagesAnterior.length + 1]);

                    //#4 (3/4) - Após setar +1 página, wait true garante q setPages n seja ativado novamente até o timer abaixo finalizar.
                    wait = true;

                    setTimeout(() => {
                        //#4 (4/4) - timeout evita ativação instantânea da func. setPages e wait false permite a ativação dps do tempo;
                        wait = false;
                    }, 500);
                }
            }
        }

        window.addEventListener("wheel", infiniteScroll);
        window.addEventListener("scroll", infiniteScroll);
        //Return: limpeza / evitar vazamento de memória;
        return () => {
            window.removeEventListener("wheel", infiniteScroll);
            window.removeEventListener("scroll", infiniteScroll);
        }
    }, [infinite])

    return (
        <div>
            {modalPhoto && <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto} />}

            {pages.map((page) => {
                // #2 (2/3) - page: passa como PROP a página atual do feed;
                // #3 (2/3) - setInfinite: passa como PROP a function de atualizar se é infinite ou não;
                return <FeedPhotos user={user} page={page} setInfinite={setInfinite} key={page} setModalPhoto={setModalPhoto} />
            })}
        </div>
    )
}

export default Feed