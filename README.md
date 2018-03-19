# Домашнее задание "Мультимедиа"

Домашнее задание #3 в ШРИ Яндекса 2018.

## Задание

Слайды про графические эффекты: https://mrsamo.github.io/shri-2018-multimedia-graphics/<br>
Слайды про аудио: https://mrsamo.github.io/shri-2018-multimedia-audio/<br>
Слайды про видео: https://mad-gooze.github.io/shri-2018-multimedia/

В домашнее задание по теме "Мультимедиа" мы предлагаем вам воспользоваться API, о которых вы узнали на лекции и сделать веб-приложение, которое визуализирует то, как робот видит окружающий мир (можно вдохновляться сценами из Терминатора https://www.youtube.com/watch?v=CZlEiD6Nmnc).

Используйте API getUserMedia() для получения аудио и видео потока с веб-камеры и микрофона, и HTML/CSS/JS (на свой выбор) для наложения эффектов.

### Основное

- [x] фильтр для видео, чтобы сделать картинку похожей на видео с камеры терминатора (подумайте, как можно сделать цветокоррекцию)
- [x] анимированный "интерфейс" терминатора
- [x] эффект "помех" в сигнале (нужно сделать наложение помех на видео и, при желании, на интерфейс - для этого так же есть несколько способов)
- [x] визуализация звукового сигнала - отображение уровня громкости (вам понадобится Web Audio API)

### Дополнительное

- [x] визуализация не только громкости звука, а и еще и звуковых частот, т.е. отображение спектрограммы в реальном времени
- [ ] детектирование движения на видео (вам понадобится API Canvas getImageData для работы с пикселями изображения - для детектора движения нужно сравнивать текущий кадр с предыдущим, подумайте о том, как это сделать без серьезных проблем с производительностью).
- [ ] Реализция какого-нибудь из эффектов на WebGL.
- [ ] Творческое - придумайте какой-нибудь эффект самостоятельно и реализуйте его.

### Требования

- [x] Ваше приложение должно уверенно работать в последней версии Chrome и Firefox.
- [x] Плюсом будет, если вы реализуете проверку требуемых фичей (т.е. graceful degradation), чтобы, если какая-то из технологий, которую вы используете не поддерживается браузером, приложение не ломалось.
- [x] Мы будем проверять производительность - при работе ваше приложение должно иметь хороший FPS (не ниже 40 и не ниже 25 с детектором движения).

В readme опишите, какие эффекты вы реализовали, какие технологии вы для этого использовали, и почему вы выбрали именно их.

## Выполнение задания

- Сначала написал фильтры на CSS, потом на Сanvas-е. Можно посмотреть здесь: https://github.com/ruslankhh/yandex-shri-2018-homework-3/tree/v1.0.0.
- Потом решил использовать [Pixi.js](https://github.com/pixijs/pixi.js). Так как в ней были нужные мне фильтры, и я давно хотел попробовать поработать с этой библиотекой.
- Разбил приложение на компоненты.
- Добавил анимированный интерфейс в виде показателя FPS, UserAgenta и случайного вывода функций из моего кода (из трёх).
- Сделал помехи в виде случайных фильтров глитча и пикселизации.
- Решил сделать отслеживание лица человека на видео [tracking.js](https://github.com/eduardolundgren/tracking.js). Разобрался, но с ней сильно упал FPS, нужно оптимизировать всё приложение. Слишком много отдельных canvas отрисовывается. Можно посомтреть в ветке [feature/face-tracker](https://github.com/ruslankhh/yandex-shri-2018-homework-3/tree/feature/face-tracker).
- Так как WebGL в Firefox выдаёт [ошибку с Pixi.js](https://github.com/pixijs/pixi.js/issues/3897) и не отображает видео, а в Яндекс.Браузере видео отображает, но без фильтров, поэтому сделал для них фильтры через HTML и CSS. В Chrome и Safari всё работает.
- Если в Chrome не работает, проверьте ссылку — она должна быть в HTTPS: https://ruslankhh.com/yandex-shri-2018-homework-3
- И соответственно поменял вывод данных в интерфейсе (в Chrome — это JS код, а в FF и Яндекс.Браузере — CSS).
- Добавил визуализатор звука по примеру [Analyser](https://mrsamo.github.io/shri-2018-multimedia-audio/#web-audio-api-modules-analyser) из  лекции ["Мультимедиа. Аудио. Синтез и разпознавание речи."](https://mrsamo.github.io/shri-2018-multimedia-audio) Александрa Завьяловa.
