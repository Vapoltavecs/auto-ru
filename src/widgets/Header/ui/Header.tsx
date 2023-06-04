import cl from "./Header.module.sass";
import logo from "@assets/icons/logo.png";
import ThemeSwitcher from "@widgets/ThemeSwitcher";
import { Themes } from "@app/providers/ThemeProvider";
import { FC, useState } from "react";
import { classNames } from "@shared/lib/classNames/classNames";
import Modal from "@shared/ui-kit/Modal/ui/Modal";
import Button, { ButtonViews } from "@shared/ui-kit/Button";

type HeaderProps = {
  theme: Themes
}

export const Header: FC<HeaderProps> = ({ theme }) => {
  const [isOpened, setOpened] = useState(false)
  return (
    <header className={classNames(cl.header, {}, [cl[theme]])}>
      <div className={cl.header__inner}>
        <img src={logo} alt="logo" className={cl.logo} />
        <div className={cl.header__menu}>
          Тема:
          <ThemeSwitcher />
          <Button view={ButtonViews.BORDERED} onClick={() => setOpened(true)} theme={theme}>Авторизация</Button>
          <Button view={ButtonViews.FILLED} theme={theme}>Регистрация</Button>

        </div>
      </div>
      <Modal theme={theme} isOpened={isOpened} onClose={() => setOpened(false)}>
        Test
      </Modal>
    </header>
  );
};
