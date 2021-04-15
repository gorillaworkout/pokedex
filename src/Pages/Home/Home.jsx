import React, { Component ,useEffect,useState} from 'react';
import './Home.css'
// import '../../style/Global.css'
import Logo from './../../Assets/newbggw.png'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import dataDB from './../../Json/listData.json'
import { TiDelete } from "react-icons/ti";
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { API_URL } from '../../Helpers/apiUrl';
import { connect } from "react-redux";
import {useDispatch} from 'react-redux'
import {LogoutFunc} from './../../redux/Actions'
import {AiOutlineBars} from 'react-icons/ai'
import {BiArrowBack} from 'react-icons/bi'
import {GrEdit} from 'react-icons/gr'
import Axios from 'axios';
import {findAllPokemon} from './../../redux/Actions'
import { render } from 'react-dom';

function Home(props){


    const [dataPokemon,setDataPokemon]=useState([])
    const [dataAllPokemon,setDataAllPokemon]=useState([])
    
    

    // const findPokemon=()=>{
    //     Axios.get(`https://pokeapi.co/api/v2/pokemon`)
    //     .then((res)=>{
    //         console.log(res.data.next)
    //         console.log(res.data.previous)
    //         console.log(res.data.results)
    //         setDataPokemon(res.data.results)
            
            

    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }

   
   


    useEffect(()=>{
        
        
        console.log(props.dataPokemon,' ini redux 103')
    },[])

    const renderItemPokemon=()=>{
        let renderPokemon = props.dataPokemon
        console.log(renderPokemon)
        return renderPokemon.map((val,index)=>{
            
            return (
            <Link to={`/detail/${val.name}`} style={{textDecoration:'none',width:'50%',paddingRight:'5px'}} >
                <div className="box-item" key={index+1}>
                        <div className="pokedex-name">
                            <p className="pokename">{val.name}</p>
                            {
                                renderPokemon[index].abilities.map((val,id)=>{
                                        return (
                                            <div className="skill-mon">
                                                <p>{val.ability.name}</p>
                                            </div>
                                        )
                                })
                            }
                        </div>
                        <div className="pokedex-name2">
                            <img src={val.sprites.other.dream_world.front_default} className="img-pokemon"></img>
                        </div>
                    </div>
             </Link>
            )
        })
    }
   
  
    return (
        
        <>
            <div className="box-home">
                <div className="header">
                    <BiArrowBack className="icon-header"/>
                    <div className="box-icon-right">
                        <AiOutlineBars className="icon-header"/>
                    </div>
                </div>

                <div className="box-pokedex">
                    <div className="block-pokedex-1">
                        <p>POKEDEX</p>
                    </div>
                    <div className="box-configuration">
                        <div className="box-icon-config">
                            <AiOutlineBars className="icon-header config" id="config-icon"/>
                        </div>
                    </div>
                    <div className="block-pokedex-2">
                    {/* RENDER BOX POKEMON */}
                    {renderItemPokemon()}
                    </div>


                </div>

            </div>

        </>
    )
}
const Mapstatetoprops=({Auth})=>{
    return {
        ...Auth
    }
}

export default (connect(Mapstatetoprops,{findAllPokemon})(Home))