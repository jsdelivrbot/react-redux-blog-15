import React, { Component } from 'react';
import PostContent from '../components/post_content';
import {readPost} from '../actions/index';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Post extends Component {
    componentDidMount() {
        this.props.readPost(this.props.params.id)
    }
    renderActivePost = () => {
        if(this.props.post){
            return <PostContent post={this.props.post}/>
        }
    }
    render() {
        return (
            
            <div>
                {this.renderActivePost()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        post: state.ActivePost
     }
}

const mapDispatchToProps = dispatch => bindActionCreators({ readPost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post);