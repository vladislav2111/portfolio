import styled from 'styled-components';
import Header from './components/Header';
import { GlobalStyles } from './components/GlobalStyles';


function App() {
    return (
        <div className="App">
            <Header/>
            <Title>My Portfolio</Title>
            <GlobalStyles/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;