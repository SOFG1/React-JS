import profileReducer from './profile-reducer.js';
import messagesReducer from './messages-reducer.js';
import sidebarReducer from './sidebar-reducer.js';

let store = {
    // Get state
    getState() {
        return this._state
    },
    //Subsccriber
    subscribe(observer) {
        store._callSubscriber = observer;
    },
    // rerender
    _callSubscriber() {
        console.log("No subscribers");
    },
    // Dispatch
    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        messagesReducer(this._state.messagesPage, action);
        sidebarReducer(this._state.sidebar, action);
        this._callSubscriber();
    },
    //////// ./ Dispatch() ////////////////////////////////////
    ///////////////////////////////////////////////////// State
    _state: {
        messagesPage: {
            messagesUsers: [
                { id: 1, name: "Dymich", avatar: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" },
                { id: 2, name: "Andrey", avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" },
                { id: 3, name: "Sveta", avatar: "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png" },
                { id: 4, name: "Sasha", avatar: "https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" },
                { id: 5, name: "Ksenia", avatar: "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" }
            ],
            messagesTexts: [
                { userId: 1, sender: "me", text: "Hi !" },
                { userId: 2, sender: "me", text: "How are you ?" },
                { userId: 3, sender: "me", text: "How is it going ?" },
                { userId: 4, sender: "user", text: "Fine. Thank you )" },
            ],
            text: "",
        },
        profilePage: {
            posts: [
                { id: 1, likes: 23, text: "Aenean id lorem ac velit.", avatar: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" },
                { id: 2, likes: 18, text: "Cras finibus sapien eget felis.", avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" },
                { id: 3, likes: 26, text: "Fusce porta elementum consectetur. Duis.", avatar: "https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg" },
                { id: 4, likes: 4, text: "Nullam quis nisi a nunc.Aenean id", avatar: "https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" },
                { id: 5, likes: 2023, text: "Sed rutrum sapien Aenean id in auctor.", avatar: "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" }
            ],
            text: "",
        },
        sidebar: {
            friends: [
                { id: 1, name: "Dymich", avatar: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" },
                { id: 2, name: "Andrey", avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" },
                { id: 3, name: "Sveta", avatar: "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png" },
            ]
        }
    },
}


export default store;