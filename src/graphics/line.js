import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 120px;
  margin-top: 120px; 
  max-width: 1240px;
`

const Line = () => {
    return(
        <Container>
            <svg width="1240" height="5" viewBox="0 0 1240 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00828142 1.48281C-1.60796 -0.609156 233.836 0.145678 279.621 0.0816108C391.354 -0.0732422 503.988 0.455814 615.558 0.700173C725.275 0.940446 835.434 1.08909 945.323 1.131C979.309 1.14354 1234.01 0.256119 1239.52 0.977028C1257.82 3.36299 746.102 2.98905 696.117 2.96479C464.012 2.85135 231.662 2.01593 0.00828142 1.48281Z" fill="#F7C9CC"/>
            </svg>
        </Container>
    )
}

export default Line;
