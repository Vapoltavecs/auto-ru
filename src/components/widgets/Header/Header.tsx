import { Container } from "@components/shared/ui-kit/Container/Container";
import cl from "./Header.module.sass";
import logo from "@assets/icons/logo.png";
import Button, { ButtonViews } from "@components/shared/ui-kit/Button";

export const Header = () => {
  return (
    <header className={cl.header}>
      <Container>
        <div className={cl.header__inner}>
          <img src={logo} alt="logo" className={cl.logo} />
          <div className={cl.header__menu}>
            <Button view={ButtonViews.DefaultFilled}>Войти</Button>
            <Button view={ButtonViews.DefaultButton}>Авторизоваться</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
