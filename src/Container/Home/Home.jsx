import React, {Component, Fragment} from "react";
import BlogPost from "../BlogPost/BlogPost";
import './Home.css';

class Home extends Component{
    state = {
        showComponent: true
    }

    render(){
        return(
            <Fragment>
                <div className='home-title'>
                    <h1>Tugas Akhir RPLBK Kelompok 34</h1>
                    <p>Blog Pribadi</p>
                </div>
                <hr/>
                <BlogPost />
            </Fragment>
        )
    }
}

export default Home;