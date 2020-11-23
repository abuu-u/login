import MainNavbar from "../components/MainNavbar";

function MainLayout({children}) {
  return (
    <>
      <MainNavbar />
      {children}
    </>
  );
}

export default MainLayout;
