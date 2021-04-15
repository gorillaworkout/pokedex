import React, { Component ,useState,useEffect} from 'react';
import {AiOutlineBars,AiOutlineHeart} from 'react-icons/ai'
import {BiArrowBack} from 'react-icons/bi'
import Axios from 'axios'
import {useParams} from 'react-router-dom'
import './Detail.css'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'

export default function Detail(){

    let {pokemon} = useParams()
   console.log(pokemon)

   const [dataPokemon,setDataPokemon]=useState([])
   const [isLoading,setIsLoading]=useState(true)
   const [activeTab,setActiveTab]=useState('1')

   const toggle = tab => {
       console.log('tab jalan')
    if(activeTab !== tab) setActiveTab(tab);
  }
   
   const findPokemon=()=>{
       let array = []
       Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
       .then((res)=>{
        array.push(res.data)
        setDataPokemon(array)
        setIsLoading(false)
        
       }).catch((err)=>{ 
           console.log(err)
       })
   }
   const testing=()=>{
       console.log('testing')
   }

   useEffect(()=>{
        findPokemon()
   },[])

   const renderAbility=()=>{
       let renderPokemon = dataPokemon
       return renderPokemon[0].abilities.map((val,index)=>{
           return (
            <div className="skill-mon2">
                <p>{val.ability.name}</p>
            </div>
           )
       })
   }


   const renderTab1=()=>{
       let renderPokemon = dataPokemon
       console.log(renderPokemon[0])
       return renderPokemon.map((val,index)=>{
           console.log(val)
           return (
               <>

            <div className="tab-pokemon">
                <div className="abilities">
                    <div className="abl-left">
                        <p>Species</p>
                    </div>
                    <div className="abl-right">
                        <p>{val.name}</p>
                    </div>
                </div>
                <div className="abilities">
                    <div className="abl-left">
                        <p>Height</p>
                    </div>
                    <div className="abl-right">
                        <p>{val.height} CM</p>
                    </div>
                </div>
                <div className="abilities">
                    <div className="abl-left">
                        <p>Weight</p>
                    </div>
                    <div className="abl-right">
                        <p>{val.weight} KG</p>
                    </div>
                </div>
               
                <div className="abilities">
                    <div className="abl-left">
                        <p>Abilities</p>
                    </div>
                    {
                    renderPokemon[index].abilities.map((val,index)=>{
                        return (
                            <p>{val.ability.name},</p>
                        )
                    })
                    }
                </div>
            </div>
            <div className="tab-pokemon">
                <div className="abilities">
                    <div className="abl-title">
                        <p>Breeding</p>
                    </div>
                    
                </div>
                <div className="abilities">
                    <div className="abl-left">
                        <p>Gender</p>
                    </div>
                    <div className="abl-right">
                        <p>OJAN</p>
                        <p>OJAN 2</p>
                    </div>
                </div>
                <div className="abilities">
                    <div className="abl-left">
                        <p>Egg Groups</p>
                    </div>
                    <div className="abl-right">
                        <p>OJAN</p>
                    </div>
                </div>
                <div className="abilities">
                    <div className="abl-left">
                        <p>Egg Cycles</p>
                    </div>
                    <div className="abl-right">
                        <p>OJAN</p>
                    </div>
                </div>
            </div>
        </>
           )
       })
   }
   const renderTab2=()=>{
    let renderPokemon = dataPokemon

    return renderPokemon[0].stats.map((val,index)=>{
       console.log(val)
       return (
           <>

        <div className="tab-pokemon">
            <div className="abilities">
                <div className="abl-left">
                    <p>{val.stat.name}</p>
                </div>
                <div className="abl-right">
                    <p>{val.base_stat}</p>
                </div>
            </div>
        </div>
      
        </>
       )
    })
   }

   if(isLoading){
       return (
           <h1>LOADING</h1>
       )
   }

    return (
        <>
            <div className="box-detail">
                <div className="header-detail">
                    <Link to='/' style={{textDecoration:'none'}}>
                        <BiArrowBack className="icon-header2"/>
                    </Link>
                    <div className="box-icon-right">
                        <AiOutlineHeart className="icon-header2"/>
                    </div>
                </div>

                <div className="box-pokedex2">
                    <div className="block-pokedex-1">
                        <div className="box-left">
                            <p>{dataPokemon[0].name}</p>
                            <div className="box-ins-left">
                                {renderAbility()}
                            </div>

                        </div>
                        <div className="id-pokemon">
                            <p>#0001</p>
                        </div>

                    </div>
                    
                    <div className="block-pokedex-2-detail">
                    {/* RENDER BOX POKEMON */}
                    {/* {renderItemPokemon()} */}
                        <div className="box-img-pokemon">
                            <img src={dataPokemon[0].sprites.other.dream_world.front_default} alt="error" className="img-pokemon"/>
                        </div>
                        <div className="box-option2">
                        <Nav tabs>
                                <NavItem className="cursor-nav">

                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => toggle('1') }
                                        
                                        >
                                        Biodata Diri
                                    </NavLink>
                                </NavItem>
                                <NavItem className="cursor-nav">
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => toggle('2') }>
                                        Base Stats
                                    </NavLink>
                                </NavItem>
                                <NavItem className="cursor-nav">
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => toggle('3') }>
                                        Evolution
                                    </NavLink>
                                </NavItem>
                                <NavItem className="cursor-nav">
                                    <NavLink
                                        className={classnames({ active: activeTab === '4' })}
                                        onClick={() => toggle('4') }>
                                        Moves
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <TabContent activeTab={activeTab}>   
                                <TabPane  tabId="1" className="tab-row-1 tabpanel">
                                 {renderTab1()}

                                </TabPane>
                                <TabPane tabId="2" className="tab-row-2 tabpanel">
                                {renderTab2()}
                                    <div className="abilities-2">
                                        <div className="abl-left-2">
                                            <p>Type Defenses</p>
                                        </div>
                                        <div className="abl-right-2">
                                            <p>the Effectiveness of each type on charmeleon</p>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane  tabId="3" className="tab-row-1 tabpanel">
                                    <div>
                                        <h1>TAB 3</h1>
                                    </div>
                                </TabPane>
                                <TabPane  tabId="4" className="tab-row-1 tabpanel">
                                    <div>
                                        <h1>TAB 4</h1>
                                    </div>
                                </TabPane>
                            </TabContent>

                        </div>
                        
                    </div>


                </div>

            </div>
        </>
    )
}