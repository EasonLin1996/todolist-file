import styled from 'styled-components';

////////////////////////////////////////////
///////tool
const Clickable = styled.span`
  label,button{
    cursor:pointer; 
  }
`;
const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Container = styled.div`
    width:80%;
    margin:0 auto;
`;

const flex = styled.div`
    display:flex;
`;

////////////////////////////////////////////
///////ToolBox
const ToolBox = styled.div`
    display:flex;
    justify-content:space-between;
    margin:1rem 0;
`
////////////////////////////////////////////
///////CreateTo
const CreateBox = styled.div`
    width:90%;
    display:flex;
    margin:0 auto;

    input{
        width: 95%;
        padding:.3rem .5rem;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid gray;
        font-size: 1rem;
        &:focus{
            outline:none;
        }
        &::placeholder{
            color:#ccc;
        }
    }
    button{
        width:5%;
        background-color: #fff;
        border: 2px solid #777;
        font-size: 1rem;
        font-weight: 100;
        cursor: pointer;
    }
`
////////////////////////////////////////////
///////LIST
const ListItem = styled.li`
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:.5rem 1rem;
    transition:all .3s;
    &:hover{
        background-color:rgba(0,0,0,.2);
        button{
            opacity:1;
            visibility:visible;
        }
    }

    button{
        border:none;
        background-color:transparent;
        text-decoration:underline;
        font-weight:bold;
        color:#666;
        opacity:0;
        visibility:none;
    }

    span{
        text-decoration: line-through;
    }
`
////////////////////////////////////////////
///////TITLE
const TitleTxt = styled.h1`
    font-size:5rem;
    font-weight:200;
    margin:.5rem;
    span{
        font-weight:800;
    }
`

const SubTitleTxt = styled.h2`
    margin:1rem;
    font-weight:200;
`

export  {flex,Container,Clickable,Center,ListItem,TitleTxt,SubTitleTxt,CreateBox,ToolBox};