import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <div className='main'>
				<header>
                    <h1>CINEFLEX</h1>
                </header>
                <div className='content'>
                    <p className='title'>Selecione o filme</p>
                    <div className='movies'>
                        <div className='card-movies'>
                           <img src="./imgs/image 3.svg" alt="movie cover"/> 
                        </div>
                        <div className='card-movies'>
                           <img src="./imgs/image 3.svg" alt="movie cover"/> 
                        </div>
                        <div className='card-movies'>
                           <img src="./imgs/image 3.svg" alt="movie cover"/> 
                        </div>
                        <div className='card-movies'>
                           <img src="./imgs/image 3.svg" alt="movie cover"/> 
                        </div>
                        <div className='card-movies'>
                           <img src="./imgs/image 3.svg" alt="movie cover"/> 
                        </div>
                        <div className='card-movies'>
                           <img src="./imgs/image 3.svg" alt="movie cover"/> 
                        </div>
                        <div className='card-movies'>
                           <img src="./imgs/image 3.svg" alt="movie cover"/> 
                        </div>
                        <div className='card-movies'>
                           <img src="./imgs/image 3.svg" alt="movie cover"/> 
                        </div>
                        <div className='card-movies'>
                           <img src="./imgs/image 3.svg" alt="movie cover"/> 
                        </div>
                        <div className='card-movies'>
                           <img src="./imgs/image 3.svg" alt="movie cover"/> 
                        </div>
                        <div className='card-movies'>
                           <img src="./imgs/image 3.svg" alt="movie cover"/> 
                        </div>

                    </div>
                </div>








				</div>
                <div className='select-time'>
                <header>
                    <h1>CINEFLEX</h1>
                </header>
                <p className='title'>Selecione o filme</p>
                <div className='schedule-movie'>
                    <p className='movie-date'> Quinta-feira, 24/06/2021 </p>
                    <div className='movie-times'>
                        <div className='time-card'>
                        <p>15:00</p>
                        </div>
                        <div className='time-card'>
                        <p>19:00</p>
                        </div>
                    </div>
                    <div className='schedule-movie'>
                    <p className='movie-date'> Sexta-feira, 25/06/2021 </p>
                    <div className='movie-times'>
                        <div className='time-card'>
                        <p>15:00</p>
                        </div>
                        <div className='time-card'>
                        <p>19:00</p>
                        </div>
                    </div>

                    </div>

                    
                    

                </div>
                <div className='movie-selected'>
                    <img src="./imgs/image 3.svg" alt="movie cover"/>       
                    <p className='movie-title'>Enola Homes</p>          
                   
                </div>

                </div>
                <div className='session'>
                <header>
                    <h1>CINEFLEX</h1>
                </header>
                <p className='title'>Selecione o(s) assento(s)</p>
                <div className='seats'>
                <div className='seat available'><p>1</p></div>
                <div className='seat selected'><p>1</p></div>
                <div className='seat unavailable'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
                <div className='seat available'><p>1</p></div>
               </div>
               
               <div className='seats-guide'>
               <div className='seat selected'>
                <p className='status'>Selecionado</p>
                </div>
                <div className='seat available'>
                <p className='status'>Selecionado</p>
                </div>
                <div className='seat unavailable'>
                <p className='status'>Indisponível</p>
                </div>
               </div>
               <div className='customer-name'>
                <p className='customer-title'>
                  Nome do comprador:  
                </p>
                <input placeholder='Digite seu nome...'></input>
               </div>
               <div className='customer-name'>
                <p className='customer-title'>
                  CPF do comprador  
                </p>
                <input placeholder='Digite seu CPF...'></input>
               </div>
                <div className='button'>
                    <p>Reservar assento(s)</p>
                </div>
                <div className='movie-selected'>
                    <img src="./imgs/image 3.svg" alt="movie cover"/>       
                    <p className='movie-title'>Enola Homes</p>          
                   
                </div>
               </div>
               <div className='success'>
               <header>
                    <h1>CINEFLEX</h1>
                </header>
                <div className='confirmation'>
                <p className='title'>Pedido feito com sucesso!</p>
                </div>
               </div>
               </div>
    );
}

const app = App();
ReactDOM.render(app, document.querySelector(".root"));
