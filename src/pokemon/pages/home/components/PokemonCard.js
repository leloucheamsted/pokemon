import { Link } from "react-router-dom"
import padWithLeadingZeros from "../../../services/pokemon.service"

function PokemonCard(props) {
    // console.log(props.data)
    return (
        <>
            <div className=" mt-5  p-2 mb-8 xl:flex items-center xl:items-start justify-center xl:basis-1/4">
                <div className="flex justify-center">
                    <div className=" ">
                        {/* Image */}
                        <Link to={`./pokemon/details/${props.data.pokedexId}`}>
                            <div className="bg-[#f5f5f5] p-2 flex justify-center items-center  rounded-md ">
                                <img src={props.data.image} alt={props.data.name} className="md:w-[200px]"></img>
                            </div>
                        </Link>
                        <div className="mt-1 pl-4">
                            <h2 className=" font-face-fb text-[#9e9191] text-[15px]">No. {padWithLeadingZeros(props.data.id, 3)}</h2>
                            <h2 className=" font-face-fd -[19px] mb-1 text-[#313131]">{props.data.name}</h2>
                            {/* Type */}
                            <div className="flex  space-x-2">
                                {props.data.apiTypes.map(type => {
                                    return (
                                        type.name !== "Vol" ? <button className={type.name === "Plante" ? 'font-face-fm px-4 h-[18px] w-[70px] rounded-sm bg-[#9bcc50] text-[#212121] text-[11px]'
                                            : type.name === "Poison" ? ' font-face-fm px-4 w-[70px] h-[18px] rounded-sm bg-[#b97fc9] text-[#fff] text-[11px]'
                                                : type.name === "Feu" ? 'font-face-fm px-4 h-[18px] w-[70px] rounded-sm bg-[#fd7d24] text-[#fff] text-[11px]'
                                                    : type.name === "Eau" ? 'font-face-fm px-4 h-[18px] w-[70px] rounded-sm bg-[#4592c4] text-[#fff] text-[11px]'
                                                        : type.name === "Insecte" ? 'font-face-fm px-4 w-[70px] h-[18px]  rounded-sm bg-[#729f3f] text-[#fff] text-[11px]'
                                                            : type.name === "Normal" ? 'font-face-fm px-4 w-[70px] h-[18px]  rounded-sm bg-[#A4ACAF] text-[#212121] text-[11px]' : null}>{type.name}</button>
                                            : <div className="relative font-face-fm grid place-items-center  rounded-sm  h-[10px] w-[70px] ">
                                                <div className="bg-[#3DC7EF] w-[70px] rounded-t-sm h-[9px] basis-1/2"></div>
                                                <div className="bg-[#bdb9b8] w-[70px] rounded-b-sm h-[9px] basis-1/2"></div>
                                                <span className="absolute top-[1px] font-face-fm right-[28px]  text-[11px]">Vol</span>
                                                {/* <h2 className="absolute top-0 bottom-0 right-0 left-0">Vol</h2> */}
                                            </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PokemonCard