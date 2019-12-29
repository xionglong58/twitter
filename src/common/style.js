import styled from 'styled-components';

export const NavWrapper = styled.div`
width:255px;
float:left;
position:fixed;
overflow:scorll;
z-index:13;
.iconfont{
    font-size:25px;
    margin-right:10px;
}
div{
    font-size:19px;
    font-weight:700;
    line-height:40px;
    padding-left:10px;
}
div:hover{
    color:#1da1f2;
    background-color:rgba(29,161,241,0.1);
    border-radius:20px;
    &.tweet{
        background-color:#1da1f2;
        color:#FFF;
        border-radius:25px;
    }
}
.twitterIcon{
    width:100%;
    padding-left:34px;
    padding-top:16px;
    span{font-size:30px;}
    color:#1da1f2;
}
.tweet{
    width:135px;
    height:50px;
    color:#FFF;
    border-radius:25px;
    background-color:#1da1f2;
    line-height:40px;
    text-align:center;
    margin:0 24px;
    cursor:pointer;
}
.profile{
    height:25px;
    width:25px;
    border-radius:50%;
    font-size:0px;
    line-height:40px;
    margin-bottom:7px;
    margin-right:10px; 
}
`