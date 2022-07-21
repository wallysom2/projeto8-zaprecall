import styled from 'styled-components';

    const Container = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 375px;
	margin: 0 auto;
	background-color: #FB6B6B;

    h1 {
        font-family: 'Righteous';
        font-weight: 400;
        font-size: 36px;
        color: #FFFFFF;
        margin-bottom: 30px;
    }
    button {
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
    }
    `
export default Container;