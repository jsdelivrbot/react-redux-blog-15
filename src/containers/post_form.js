import React, { Component } from 'react';
import {Link} from 'react-router';
import {reduxForm} from 'redux-form';
import {addPost} from '../actions/index';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';


const formConfig = {
    form: 'CreatPostForm',
    fields: [
        'title',
        'content',
        'author'
    ],
    validate: validate,
    initialValues : {author: "Moi"} 
}

class PostForm extends Component {
    render() {
        const {fields, handleSubmit, errors} = this.props;
        return (
            <div>
                <h1>Form post</h1>
                <form onSubmit={handleSubmit(this.createPost.bind(this))}>
                    <div className={`form-group ${fields.title.touched && errors.title ? 'has-danger' : ''}`}>
                        <label>Titre</label>
                        <input type="text" className="form-control" {...fields.title}/>
                        <div>{fields.title.touched && errors.title}</div>
                    </div>
                    <div className={`form-group ${fields.content.touched && errors.content ? 'has-danger' : ''}`}>
                        <label>Description</label>
                        <input type="textarea" className="form-control" {...fields.content}/>
                         <div>{fields.content.touched && errors.content}</div>
                    </div>
                    <div className={`form-group ${fields.author.touched && errors.author ? 'has-danger' : ''}`}>
                        <label>Auteur</label>
                        <input type="text" className="form-control" {...fields.author}/>
                         <div>{fields.author.touched && errors.author}</div>
                    </div>
                    <Link to={'/'} className="btn-space"><button className="btn btn-danger">Retour</button></Link>
                    <button type="submit" className="btn btn-primary" disabled={this.props.invalid}>Ajouter</button>
                </form>
            </div>
        );
        
    }
    createPost(post){
        this.props.addPost(post);
        browserHistory.push('/');

    }
    
}
function validate(value){
    const errors = {};
    if(!value.title){
        errors.title = "Veuillez renseigner un titre"
    }
    if(!value.content){
        errors.content = "Veuillez renseigner une description"
    }if(!value.author){
        errors.author = "Veuillez renseigner le champ auteur"
    }
    return errors
}

const mapDispatchToProps = dispatch => bindActionCreators({ addPost }, dispatch)

export default connect(null,mapDispatchToProps)(reduxForm(formConfig)(PostForm));