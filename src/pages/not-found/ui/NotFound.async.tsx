import React from "react";

// eslint-disable-next-line no-comments/disallowComments
/**
 * И главную вещь, которую нужно запомнить - это
 * то, что делать ассинхронную загрузку страницы,
 * только в том случае, если на ней много контента
 * или человек, может в принципе не открыть эту страницу
 * и она не нужна в основном бандле, который присылается пользователю
 */

export const NotFoundPage = React.lazy(() => import("./NotFound"));
