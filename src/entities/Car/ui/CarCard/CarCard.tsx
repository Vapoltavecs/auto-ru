import { FC } from "react";
import cl from "./CarCard.module.sass";
import Card from "@shared/ui-kit/Card";
import { ICar } from "../../model/car";
import Link from "@shared/ui-kit/Link";
import { LinkViews } from "@shared/ui-kit/Link/ui/Link";
import { Themes } from "@app/providers/ThemeProvider";
import kia from "../../../../app/assets/car.jpg"
import { classNames } from "@shared/lib/classNames/classNames";
import { ListViews } from "../CarCardList/CarCardList";



type Props = {
  car: ICar;
  image?: string;
  theme: Themes,
  className?: string,
  view: ListViews
};

export const CarCard: FC<Props> = ({ car, image = kia, theme, className, view }) => {
  return (
    <Card theme={theme} className={className}>
      <div className={classNames(cl.card, {}, [cl[theme], cl[view]])}>
        <img src={image} alt="car" className={cl.card__image} />
        <div className={cl.card__content}>
          <div className={cl.card__header}>
            <span className={cl.card__title}><Link to={"car/" + car.id} theme={theme} view={LinkViews.DEFAULT}>{car.name}</Link></span>
            <span className={cl.card__price}>
              {car.description}
            </span>
          </div>
          <div className={cl.card__footer}>
            <span>Пробег: {car.mileage} / Год выпуска: {car.year}</span>
            <span>{car.name}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
