import styled from 'styled-components'

const Header = (props) => {
    return(
        <Container>
            <Content>
                <Logo>
                    <a href='/home'>
                        <img src='/assets/home-logo.svg' alt=''/>
                    </a>
                </Logo>
                <Search>
                    <SearchContainer>
                        <SearchIcon><img src='/assets/search-icon.svg'/></SearchIcon>
                        <input type='text' placeholder='Search'/> 
                    </SearchContainer>
                    
                </Search>
            </Content>
        </Container>        
    
    
    );
}

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    left: 0;
    padding: 0 24px;
    position: fixed;
    top:0;
    width: 100vw;
    z-index: 100;

`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 90%;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;

`;

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;

    & > div {
        max-width: 280px;
        input {
            border: none;
            box-shadow: none;
            background-color: #EEF3F8;
            border-radius: 2px;
            color: rgba(0, 0, 0, 0.9);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            vertical-align: text-top;
            vertical-align: middle;


            &:focus {
                outline: none;
                border: 2px solid #2977C9 !important; 
            }
            
            
        }
    }
`;

const SearchIcon = styled.div`
    padding: 3px 10px 0px;
    position: absolute;
    z-index: 1;
    left: 10px;
    margin: 0;
    pointer-events: none;

    
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Header;