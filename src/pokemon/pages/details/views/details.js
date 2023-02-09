import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById, getPokemonsByid } from "../../../../redux/pokemonSlice";
import { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import padWithLeadingZeros from "../../../services/pokemon.service";


export default function Details() {
    let { id } = useParams();
    console.log(id)
    // const dispatch = useDispatch()
    var currentState = useSelector(getPokemonsByid(id))
    const [currentPokemon, setcurentPokemon] = useState(currentState)
    const [Pokemon, setPokemon] = useState({
        name: null,
        image: null,
        pokedexId: null
    })

    useEffect(() => {
    }, [currentPokemon, Pokemon, id])

    return (
        <>
            <div className="overflow-x-hidden">
                <div className=" bg-[#a4a4a4] pt-2  h-[5px] md:h-[55px]">
                    <div className=" hidden md:block bg-[#fff] h-[50px]">
                        <div id="parallelogram1" class="shape_div"></div>
                        <div id="parallelogram2" class="shape_div"></div>
                    </div>
                </div>
                <div className="bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')]  flex-wrap px-3 md:px-[100px] xl:px-[150px]  justify-center  items-start w-full xl:h-auto">
                    <div className=" w-full pb-10 flex justify-center items-start flex-wrap bg-white">
                        <div className="font-face-fm text-[28px] text-[#21211] p-[14px]">{currentPokemon?.name} <span className="font-face-fr text-[#616161]">No. {padWithLeadingZeros(currentPokemon?.pokedexId, 3)}</span></div>

                        <div className=" p-2 xl:flex space-x-3  w-full">
                            <div className="basis-1/2 bg-[#f5f5f5] p-2 flex justify-center items-center h-full w-full  rounded-md xl:h-[400px]  xl:w-[250px]">
                                <img src={currentPokemon?.image} alt={currentPokemon?.name} className="w-[300px] h-[300px]"></img>
                            </div>
                            <div className="font-face-fm  basis-1/2 mt-[30px] xl:mt-0">
                                <p className="text-[17px] text-[#212121]">En combat, il bat des ailes très rapidement pour projeter de la poudre toxique sur ses ennemis.</p>
                                <div className="flex my-5 items-center ">Version:
                                    <svg className="ml-5 text-[#0072b0] " fill="none" viewBox="0 0 24 24" height="3em" width="3em">
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm2.07 1a7.002 7.002 0 0013.86 0h-4.1a3.001 3.001 0 01-5.66 0h-4.1zm13.86-2a7.001 7.001 0 00-13.86 0h4.1a3.001 3.001 0 015.66 0h4.1zM12 13a1 1 0 100-2 1 1 0 000 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <svg className="ml-1 text-[#dd2d51] " fill="none" viewBox="0 0 24 24" height="3em" width="3em">
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm2.07 1a7.002 7.002 0 0013.86 0h-4.1a3.001 3.001 0 01-5.66 0h-4.1zm13.86-2a7.001 7.001 0 00-13.86 0h4.1a3.001 3.001 0 015.66 0h4.1zM12 13a1 1 0 100-2 1 1 0 000 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="p-5 flex  flex-wrap h-auto  rounded-lg w-full justify-start bg-[#30A7C7] ">
                                    <div className="basis-1/2 w-full mb-4  text-white">
                                        <h2 className="text-white  text-[15ox] mb-3">Taille</h2>
                                        <span className="text-black mb-3 text-[18px]">1.1</span>
                                    </div>
                                    <div className="basis-1/2 w-full mb-4 text-white">
                                        <h2 className="text-white  text-[15ox] mb-3">Categories</h2>
                                        <span className="text-black mb-3 text-[18px]">Papillon</span>
                                    </div>
                                    <div className="basis-1/2 w-full mb-4 text-white">
                                        <h2 className="text-white  text-[15ox] mb-3">Poids</h2>
                                        <span className="text-black mb-3 text-[18px]">32 Kb</span>
                                    </div>
                                    <div className="basis-1/2 w-full mb-4 text-white">
                                        <h2 className="text-white  text-[15ox] mb-3">Talent</h2>
                                        <div className="flex items-center space-x-3">
                                            <span className="text-black text-[18px]">Oeil Compose

                                            </span>
                                            <svg
                                                className="text-white"
                                                viewBox="0 0 512 512"
                                                fill="currentColor"
                                                height="1em"
                                                width="1em"
                                            >
                                                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zm-86.2-346.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1 0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6-13.3 0-24-10.7-24-24v-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1 0-8.4-6.8-15.1-15.1-15.1h-58.3c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="basis-1/2 w-full mb-4 text-white">
                                        <h2 className="text-white  text-[15ox] mb-3">Sex</h2>
                                        <div className="text-black flex items-center space-x-5  mb-3 text-[18px]">
                                            <svg
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                                height="1.5em"
                                                width="1.5em"

                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9.5 2a.5.5 0 010-1h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.707L9.871 6.836a5 5 0 11-.707-.707L13.293 2H9.5zM6 6a4 4 0 100 8 4 4 0 000-8z"
                                                />
                                            </svg>

                                            <svg
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                                height="1.5em"
                                                width="1.5em"

                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 1a4 4 0 100 8 4 4 0 000-8zM3 5a5 5 0 115.5 4.975V12h2a.5.5 0 010 1h-2v2.5a.5.5 0 01-1 0V13h-2a.5.5 0 010-1h2V9.975A5 5 0 013 5z"
                                                />
                                            </svg>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
