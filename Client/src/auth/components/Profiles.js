import React, { Component } from "react";

import AddProfile from "./AddProfile";
import {
    getProfile,
    deleteProfile,
    addProfile,
    updatProfile
} from "../api";

export default class Profiles extends Component {
    componentDidMount() {
        getProfile()
            .then(res => {
                this.props.setProfile(res.data.Profiles);
            })
            .catch(err => {
                console.log(err);
            });
    }

    // deleteProfile = id => {
    //     deleteProfileById(id)
    //         .then(res => {
    //             const newArticlesList = this.props.articles.filter(
    //                 article => article._id !== id
    //             );
    //             this.props.setArticles(newArticlesList);
    //         })
    //         .catch(err => console.log(err));
    // };

    addProfile = profile => {
        addProfile(profile)
            .then(res => {
                const newProfile = [...this.props.Profiles, res.data.Profile];
      this.props.setProfile(newProfile);
            })
            .catch(err => console.log(err));
    };

    // Update article by ID
    // updateArticle = (article, id) => {
    //     updateArticle(article, id)
    //         .then(res => {
    //             // Copy the articles array from props
    //             const newArticles = [...this.props.articles];

    //             // Extract index of the article that should update
    //             const indexOfArticleToUpdate = this.props.articles.findIndex(
    //                 article => article._id === id
    //             );

    //             // Extract the article that should update
    //             const articleToUpdate = newArticles[indexOfArticleToUpdate];

    //             // Change required data of the old article
    //             const updatedArticle = {
    //                 ...articleToUpdate,
    //                 title: article.title,
    //                 content: article.content,
    //                 author: article.author,
    //                 published: article.published
    //             };

    //             // Replace the old article with the updated article in the array
    //             newArticles.splice(indexOfArticleToUpdate, 1, updatedArticle);

    //             // Set the state of the articles in APP component
    //             this.props.setArticles(newArticles);
    //         })
    //         .catch(err => console.log(err));
    // };

    render() {
        let Profile = <h4>User doesnt Have Profile yet</h4>;

        if (this.props.Profile.length > 0) {
            Profile = this.props.Profile.map(
                ({ Name, Label ,Email, Phone, Website,Summary,Profiles }, index) => {
                   
                 [{ Network: "", Username: "", Url: "" }]
                    
                    
                    
                    return (

                        <AddProfile
                        
                            key={index}
                            Name={Name}
                            Label={Label}
                           Email={Email}
                            Phone={Phone}
                            Website={Website}
                            Summary={Summary}
                            Profiles={Profiles[{Network:Network,Username:Username,Url:Url}]}
                           
                            addProfile={this.addProfile}
                            
                        />
                    )}
            );
        }

        return (
            <>
                <h1>Add New Profile</h1>
                <ArticleForm addProfile={this.addProfile} />
             
                <h1>Profile</h1>
                {}
            </>
        );
    }
}