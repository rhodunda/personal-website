import { Component } from "react";
import Spinner from '../../componets/Spinner/Spinner'


class Blogs extends Component {

    render() {
        let blog = <Spinner/>
        if (!this.props.loading) {
            orders = <div>working</div>
        }



        return(
            {blog}
        )
    }
}

const mapStateToProps = state => {
    return {
        blog: state.blog.blogs,
        loading: state.blog.loading
    }
}


export default connect (mapStateToProps)