import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { ZMB } from '../context/context';
import axios from 'axios';
import dateFormat from "dateformat";
import ReactPaginate from 'react-paginate';

// image import
import backgraund from "../navbar/icons/backgraund.svg"
import calendar from "../icons/Calender.svg"
import vector from "../icons/Vector.svg"
import zmb from "../icons/zmb.jpg"

const data1 = require("../json/data1.json")

class News extends PureComponent  {
    constructor(props) {
        super(props);

        this.state = { 
            orgtableData: [],
            offset: 0,
            tableData: [],
            perPage: 6,
            currentPage: 0
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });
    };

    loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		})
	
    }

    componentDidMount(){
        this.getData();
    }

    getData() {
        axios
            .get(`http://zmbacademy.uz:8080/news/`)
            .then(res => {

                var data = res.data;
				
                var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    orgtableData :res.data,
                    tableData:slice
                })
            });
    }
    render() { 
        return ( 
            <React.Fragment>
                <ZMB.Consumer>
                    {(x)=>{
                        return(
                            <React.Fragment>
                                <div className="main_asos" onClick={x.searchClose}>
                                    <div 
                                        className="nav_title"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                        style={{
                                            background:`linear-gradient(150deg, rgba(9, 235, 223, 0.4) -37.75%, rgba(12, 24, 39, 0.4) 22%), url(${backgraund}), #C4C4C4`,
                                            backgroundPosition: "center",
                                            backgroundSize:"cover"
                                        }}
                                    >
                                        <div className="title">
                                            <h1>
                                                <span>ZMB</span> - место где вашему ребёнку понравится
                                            </h1>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                Качественное образование должно быть доступным для всех людей, внезависимости от финансовой ситуации
                                            </h2>
                                        </div>
                                    </div>

                                    <div 
                                        className="main4 mtop-0"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        <div className="main_title">
                                            <div className="vector">
                                                <h1>{x.TIL().NEWS}</h1>
                                                <img src={vector} alt="" />
                                            </div>
                                        </div>
                                        <div className="main4_grid">
                                            {this.state.tableData.map((m, index)=>{
                                                return(
                                                    <div className="grid_list" key={index}>
                                                        <Link onClick={this.scrollTop} to={`/news${m.id}`} className="list_img"><img src={m.images.length === 0 ? zmb : m.images[0].image} alt="" /></Link>
                                                        <div>
                                                            <h1><Link onClick={this.scrollTop} to={`/news${m.id}`} >
                                                                {x.til === "uz" ? m.name
                                                                : x.til === "ru" ? m.name_ru
                                                                : m.name_en}
                                                            </Link></h1>
                                                            <div className="m4_date">
                                                                <div><img src={calendar} alt="" /><p>{dateFormat(m.date, "dd/mm/yyyy")}</p></div>
                                                                {/* <div><img src={time} alt="" /><p>{dateFormat(m.date, "HH:MM")}</p></div> */}
                                                            </div>
                                                            <h2>
                                                                {x.til === "uz" ? m.description.substring(0, 90)
                                                                : x.til === "ru" ? m.description_ru.substring(0, 90)
                                                                : m.description_en.substring(0, 90)}
                                                                {m.description.length > 90 ? "..." : ""} 
                                                                 <Link onClick={this.scrollTop} to={`/news${m.id}`}>
                                                                    {x.TIL().PODROBNO}
                                                                </Link>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="page">
                                            {this.state.orgtableData.length === 0 ? null :
                                                <ReactPaginate
                                                    previousLabel={"<"}
                                                    nextLabel={">"}
                                                    breakLabel={"..."}
                                                    breakClassName={"break-me"}
                                                    pageCount={this.state.pageCount}
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={5}
                                                    onPageChange={this.handlePageClick}
                                                    containerClassName={"pagination"}
                                                    subContainerClassName={"pages pagination"}
                                                    activeClassName={"active_page"}
                                                />
                                            }
                                        </div>
                                        
                                    </div>

                                </div>
                            </React.Fragment>
                        )
                    }}
                </ZMB.Consumer> 
                
            </React.Fragment>
         );
    }
}
 
export default News;