export const const AppContainer = styled.main`
  display: grid;
  grid-template-columns: ${({ active }) =>
    active ? "20px auto auto 60px" : "20px auto auto 250px"};
  grid-template-rows: 60px auto auto 25px;
  grid-template-areas:
    " header header header aside"
    "  gap    main   main  aside"
    "  gap    main   main  aside"
    " footer footer footer aside";
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const RoutesContainer = styled.div`
  ${props => props.theme.shadow.box};
  position: relative;
  grid-area: main;
  background-color: ${props => props.theme.color.white.bg};
  border-radius: 5px;
  overflow: hidden;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0;
  }
`; = styled.main`
  display: grid;
  grid-template-columns: ${({ active }) =>
    active ? "20px auto auto 60px" : "20px auto auto 250px"};
  grid-template-rows: 60px auto auto 25px;
  grid-template-areas:
    " header header header aside"
    "  gap    main   main  aside"
    "  gap    main   main  aside"
    " footer footer footer aside";
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const RoutesContainer = styled.div`
  ${props => props.theme.shadow.box};
  position: relative;
  grid-area: main;
  background-color: ${props => props.theme.color.white.bg};
  border-radius: 5px;
  overflow: hidden;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0;
  }
`;