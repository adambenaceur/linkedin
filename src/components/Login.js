import styled from 'styled-components';


function Login(props) {
    return( 
        <Container>
            <Nav>
                <a href='/'>
                    <img src='/assets/login-logo.svg' alt=''/>
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign in</SignIn>
                </div>

            </Nav>
        </Container>
    );
}


const Container = styled.div`
    padding: 0px;
`;
const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0px 16px !important;
    display: flex;
    align-items: center;
    position: relative;
    justify-content:space-between;
    flex-wrap:nowrap;

    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;
    border-radius: 4px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
        cursor:pointer;
    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0A66C2;
    color: #0A66C2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
        color: #0A66C2;
        cursor: pointer;
        text-decoration: none;
    }
`;

export default Login;