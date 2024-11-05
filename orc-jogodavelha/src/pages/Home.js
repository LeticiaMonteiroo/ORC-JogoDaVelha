import HelloWord from '../components/HelloWord';
function Home(){
    return(
        <div>
            <h1>Jogo da Velha</h1>
            <p>Escolha seu modo de jogo</p>
            <HelloWord text="singleplayer"/>
            <HelloWord text="Multiplayer"/>
        </div>
    )
}
export default Home;