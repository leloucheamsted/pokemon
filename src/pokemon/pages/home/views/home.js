import { useCallback, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonAsync } from "../../../../redux/pokemonSlice"
import PokemonCard from "../components/PokemonCard";
import { slice } from 'lodash'

export default function Home() {
    const ref = useRef()
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemons.pokemons)
    const [isCompleted, setIsCompleted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [index, setIndex] = useState(8)
    const initialPokemons = slice(pokemons, 0, index)
    const handleScroll = useCallback(() => {
        console.log("scrolling")
    }, [])
    useEffect(() => {
        const div = ref.current
        console.log("Div is ", div);
        div.addEventListener("scroll", handleScroll)
        dispatch(getPokemonAsync())
    }, [dispatch, handleScroll])

    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            setIsLoading(true)
            return setTimeout(resolve, milliseconds)
        });
        setIsLoading(false)
        setIsCompleted(false)
    };

    const loadMore = async () => {
        console.log("load mor !!!")
        setIsCompleted(true)
        await sleep()
        setIndex(index + 8)
        console.log(index)

        if (index >= pokemons.length) {

        } else {
            //setIsCompleted(false)
            // setIsLoading(false)
        }
    }
    return (
        <>
            <div ref={ref} className="bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')]    xl:flex-wrap xl:px-[100px] md:px-[100px]  justify-center items-start w-full h-full min-h-screen">
                <div className="bg-white w-screen  md:w-auto min-h-screen h-auto ">
                    {initialPokemons.length !== 0 && <div className=" md:p-0 md:flex xl:justify-between justify-center space-x-0  flex-wrap ">
                        {initialPokemons.map(pokemon => {
                            return (
                                <PokemonCard data={pokemon} />
                            )
                        })}
                    </div>
                    }
                    <div className="flex justify-center py-20 items-center w-full">
                        {
                            isCompleted === false && pokemons.length !== 0 ?
                                (<button onClick={loadMore} className="p-[12px]  text-[16px] text-white font-semibold rounded-[5px]  bg-[#30A7D7] ">Charger d'autres Pokemons</button>) : null
                        }
                        {isLoading === true || pokemons.length === 0 ? (<svg className="ml-5 animate-spin text-gray-500 " fill="none" viewBox="0 0 24 24" height="3em" width="3em">
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm2.07 1a7.002 7.002 0 0013.86 0h-4.1a3.001 3.001 0 01-5.66 0h-4.1zm13.86-2a7.001 7.001 0 00-13.86 0h4.1a3.001 3.001 0 015.66 0h4.1zM12 13a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                            />
                        </svg>) : null
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
