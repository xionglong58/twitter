import styled from "styled-components";

export const HomepageWrapper = styled.div`
  float: left;
  width: 90%;
  overflow: hidden;
`;
export const HomepageLeft = styled.div`
  float: left;
  position:relative;
  left:255px;
`;
export const HomepageHeader = styled.div`
  position:fixed;
  height: 53px;
  width: 523px;
  margin: 0 auto;
  line-height: 53px;
  font-size: 19px;
  font-weight: bold;
  border: 1px solid rgb(230, 236, 240);
  padding: 0 10px;
  background-color:#FFF;
  z-index:10;
`;

export const WhatIsHappen = styled.div`
  height: 53px;
  width: 523px;
  margin: 0 auto;
  font-size: 15px;
  color: #657786;
  font-weight: bold;
  border-right: 1px solid #333;
  border: 1px solid rgb(230, 236, 240);
  border-top:none;
  position: relative;
  top:53px;
  cursor: pointer;
  div {
    display: inline-block;
    line-height: 37px;
  }
  .profile {
    img{
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
    }
    margin: 8px 0 0 8px;
    height: 37px;
  }
  .tweets {
    width: 65%;
    border-radius: 19.5px;
    background-color: #e6ecf0;
    margin: 8px 0 0 5px;
    padding-left: 10px;
  }
  span {
    float: right;
    font-size: 25px;
    padding-right: 10px;
    line-height: 53px;
    color: #1da1f2;
  }
  img{
    border-radius:18.5px;
  }
`;

export const SearchBar = styled.div`
  position: fixed;
  /* left:700px; */
  width:100%;
  height: 53px;
  margin-left:20px;
  .SearchTwitter {
    height: 39px;
    width: 300px;
    border-radius: 18px;
    margin-top: 7px;
    padding-left: 40px;
    position:absolute;
    left:778px;
  }
  input{
    outline:none;
  }
`;

export const ListItemWrapper = styled.div`
width:523px;
margin-top:53px;
border: 1px solid rgb(230, 236, 240);
border-top:none;
overflow:hidden;
position:relative;
.profile{
  margin:10px 10px;
  float:left;
  height:100px;
  img{
    border-radius:50%;
    cursor:pointer;
  }
}
.content{
  margin:10px 10px;
  float:left;
  .userName{
    font-size:15px;
    font-weight:bold;
    cursor:pointer;
  }
  span{
    margin-right:10px;
  }
  .img{
    width:400px;
    img{
      border-radius:15px;
    }
  }
  .text{
    width:400px;
  }
}
`;
export const ListItemInfo = styled.div`
position:absolute;
width:300px;
/* height:200px; */
background-color:#FFF;
border: 1px solid rgb(230, 236, 240);
top:35px;
left:70px;
border-radius:10px;
.profile{
float:none;
height:auto;
}
.content{
float:none;
.text{
  width:100%;
  
}
.user-info{
  span{
  display:block;
}
}
}
`;
