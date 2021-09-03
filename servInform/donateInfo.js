const donateInfo = [
  {
    name: 'SkyBlock old',
    donates: [
      {
        name: 'VIP',
        cost: '70р',
        permissions: [
          '/kit vip  - Набор VIP игрока',
          '/wb  - Виртуальный верстак',
          '/realname  - Узнать настоящий ник игрока (измененный в /nick)',
          '/hat  - Надеть предмет в руке на голову',
          '/feed  - Накормить себя',
          'Макимальное кол-во предметов на аукционе 8 (+3)',
        ],
      },
      {
        name: 'VIP+',
        cost: '120р',
        permissions: [
          '/kit vipp  - Набор VIP+ игрока',
          '/seen  - Посмотреть когда был в сети игрок',
          '/back  - Возврат на место до телепортации',
          '/suicide  - Самоубийство',
          '/heal  - Вылечить себя',
          '/ec  - Виртуальный сундук эндера',
          '/nick  - Сменить ник',
          'Цветное форматирование в чате',
          'Макимальное кол-во предметов на аукционе 10 (+5)',
          'Все возможности VIP',
        ],
      },
      {
        name: 'MVP',
        cost: '250р',
        permissions: [
          '/kit mvp  - Набор MVP игрока',
          '/ptime  - Изменение времени для себя',
          '/repair  - Починить предмет в руке',
          '/weather  - Управление погодой',
          'Возможность кормить других игроков через /feed',
          '/invsee  - Просмотр инвентаря других игроков (Менять нельзя)',
          'Макимальное кол-во предметов на аукционе 15 (+10)',
          'Все возможности VIP+',
        ],
      },
      {
        name: 'MVP+',
        cost: '500р',
        permissions: [
          '/kit mvpp  - Набор MVP+ игрока',
          '/god  - Включить режим бога',
          '/time set  - Изменять время на сервере',
          '/kittycannon  - Кото-пушка!',
          'Цветное форматирование в /nick',
          'Возможность лечить других игроков через /heal',
          'Возможность открывать эндер-сундуки других игроков',
          'Вас невозможно игнорировать через /ignore',
          'Макимальное кол-во предметов на аукционе 25 (+15)',
          'Все возможности MVP',
        ],
      },
    ],
  },
  {
    name: 'Survival HARD',
    donates: [
      {
        name: 'VIP',
        cost: '70р',
        permissions: [
          '/kit vip  - Набор VIP игрока',
          '/wb  - Виртуальный верстак',
          '/realname  - Узнать настоящий ник игрока (измененный в /nick)',
          '/hat  - Надеть предмет в руке на голову',
          '/feed  - Накормить себя',
          'Максимальный размер привата 80к',
          'Макимальное кол-во предметов на аукционе 8 (+3)',
        ],
      },
      {
        name: 'VIP+',
        cost: '120р',
        permissions: [
          '/kit vipp  - Набор VIP+ игрока',
          '/seen  - Посмотреть когда был в сети игрок',
          '/back  - Возврат на место до телепортации',
          '/suicide  - Самоубийство',
          '/heal  - Вылечить себя',
          '/ec  - Виртуальный сундук эндера',
          '/nick  - Сменить ник',
          'Цветное форматирование в чате',
          'Макимальное кол-во предметов на аукционе 10 (+5)',
          'Максимальный размер привата 160к',
          'Все возможности VIP',
        ],
      },
      {
        name: 'MVP',
        cost: '250р',
        permissions: [
          '/kit mvp  - Набор MVP игрока',
          '/ptime  - Изменение времени для себя',
          '/repair  - Починить предмет в руке',
          '/weather  - Управление погодой',
          'Возможность кормить других игроков через /feed',
          '/invsee  - Просмотр инвентаря других игроков (Менять нельзя)',
          'Макимальное кол-во предметов на аукционе 15 (+10)',
          'Максимальный размер привата 320к',
          'Все возможности VIP+',
        ],
      },
      {
        name: 'MVP+',
        cost: '500р',
        permissions: [
          '/kit mvpp  - Набор MVP+ игрока',
          '/god  - Включить режим бога',
          '/time set  - Изменять время на сервере',
          '/kittycannon  - Кото-пушка!',
          'Цветное форматирование в /nick',
          'Возможность лечить других игроков через /heal',
          'Возможность открывать эндер-сундуки других игроков',
          'Вас невозможно игнорировать через /ignore',
          'Макимальное кол-во предметов на аукционе 25 (+15)',
          'Максимальный размер привата 640к',
          'Возможность поменять режим пвп в регионах /rg flag <Регион> pvp allow/deny',
          'Все возможности MVP',
        ],
      },
    ],
  },
  {
    name: 'Survival STANDART',
    donates: [
      {
        name: 'Флай',
        cost: 15,
        permissions: [
          '/back - вернуться на место смерти/прошлой телепортации',
          '/fly - включить полет себе',
          '/jump - переместиться на точку взгляда',
          '/pweather - установить погоду для себя',
          'Максимум приватов: 2',
          'Максимум точек дома: 2',
          'Максимальный размер привата: 60k',
          'Максимум лотов на аукционе: 8',
        ],
      },
      {
        name: 'Вип',
        cost: 50,
        permissions: [
          '/wb - виртуальный верстак',
          '/hat - надеть блок на голову',
          '/feed - накормить себя',
          '/disposal - мусорка',
          '/repair - починить предмет в руке',
          '/exp give - получить опыт',
          'Максимум приватов: 3',
          'Максимум точек дома: 3',
          'Максимальный размер привата: 80k',
          'Максимум лотов на аукционе: 10',
        ],
      },
      {
        name: 'Премиум',
        cost: 80,
        permissions: [
          '/ext - потушить себя',
          '/ptime - установить себе время',
          '/more - стакнуть предмет',
          '/god - включить режим бога',
          '/heal - вылечить себя',
          '/ec - виртуальный эндерсундук',
          '/repair all - починить все',
          'Максимум приватов: 4',
          'Максимум точек дома: 4',
          'Максимальный размер привата: 100k',
          'Максимум лотов на аукционе: 12',
        ],
      },
      {
        name: 'Креатив',
        cost: 12,
        permissions: [
          '/tpauto - включить автоматический /tpaccept',
          '/speed - изменить скорость',
          '/ci - очистить инвентарь',
          '/itemdb - узнать информацию о предмете',
          '/suicide - самоубийство',
          'Максимум приватов: 5',
          'Максимум точек дома: 5',
          'Максимальный размер привата: 120k',
          'Максимум лотов на аукционе: 14',
        ],
      },
      {
        name: 'Модер',
        cost: 200,
        permissions: [
          '/mute - заткнуть игрока',
          '/kittycannon - кото-пушка',
          '/near - узнать кто находится рядом',
          '/tp - телепортация к игроку',
          '/tptoggle - запретить телепортацию к себе',
          '/ext <Игрок> - потушить другого игрока',
          '/kit <набор> - все наборы',
          '/info - ПКМ - проверка информации о блоке',
          'Максимум приватов: 6',
          'Максимум точек дома: 6',
          'Максимальный размер привата: 140k',
          'Максимум лотов на аукционе: 16',
        ],
      },
      {
        name: 'Ст.Модер',
        cost: 250,
        permissions: [
          '/bc - объявление на весь сервер',
          '/time set - изменение глобального времени',
          '/seen - информация об игроке',
          '/nick - смена ника в табе и чате',
          '/kick - кикнуть игрока',
          '/invsee - посмотреть инвентарь игрока',
          'Максимум приватов: 7',
          'Максимум точек дома: 7',
          'Максимальный размер привата: 200k',
          'Максимум лотов на аукционе: 18',
          'Вы можете лечить других игроков',
          'В seen видна причина бана(если есть) и IP',
          'Цветное форматирование в чате',
        ],
      },
      {
        name: 'Админ',
        cost: 350,
        permissions: [
          '/etempban - забанить игрока на время',
          '/fireball - запустить фаербол',
          '/burn - поджечь игрока',
          '/me - объявление на весь сервер',
          '/lightning <игрок> - ударить игрока молнией',
          '/realname ~ - узнать ник игрока (если изменен в /nick)',
          '/spawnmob - призвать моба',
          'Максимум приватов: 8',
          'Максимум точек дома: 8',
          'Максимальный размер привата: 400k',
          'Максимум лотов на аукционе: 20',
          'Вас невозможно кинуть в игнор',
          'Вы можете выдавать опыт другим людям',
          'Доступно цветное форматирование ника',
        ],
      },
      {
        name: 'Гл.Админ',
        cost: 450,
        permissions: [
          '/socialspy - доступ к мини консоли',
          '/vanish - полная нивидимость на сервере(и в TAB)',
          '/tpo - телепортация к игроку выключившему тп',
          '/give - выдать любой предмет',
          '/eco - управление деньгами на сервере',
          '/getpos <игрок> - узнать координаты игрока',
          '/undo - отмена действий WE',
          '/redo - повтор отмененных действий WE',
          '//set - заполнить область блоками',
          '//line - построить линию от pos1 до pos2',
          '//clearhistory - очистить историю действий WE',
          'Максимум приватов: 9',
          'Максимум точек дома: 9',
          'Максимальный размер привата: 500k',
          'Максимум лотов на аукционе: 22',
          'Максимальный объем изменений WorldEdit: 50k',
        ],
      },
      {
        name: 'Владелец',
        cost: 600,
        permissions: [
          '/tpoffline - тп к игроку не в сети',
          '/near <игрок> - посмотреть кто рядом с игроком',
          '/tpohere - телепортация к себе игрока с выключенным тп',
          '//cyl - цилиндр WE',
          '//sphere - сфера WE',
          '//hcyl - полый цилиндр WE',
          '//hsphere - полая сфера WE',
          '//pyramid - пирамида WE',
          '//hpyramid - полая пирамида WE',
          '//center - установить блок на центр выделенной области WE',
          '//walls - построить стены региону WE',
          '//faces - построить коробку WE',
          'Максимум приватов: 10',
          'Максимум точек дома: 10',
          'Максимальный размер привата: 800k',
          'Максимум лотов на аукционе: 24',
          'Максимальный объем изменений WorldEdit: 80k',
          'Вы можете очистить инвентарь другим игрокам',
          'Вы можете изменять инвентарь другим игрокам',
          'Вы можете видеть сообщения из админ чата (игроки пишут жалобы /helpop <msg>)',
          'Вы можете видеть игроков в ванише',
          'Нет кд на киты',
        ],
      },
      {
        name: 'Повелитель',
        cost: 700,
        permissions: [
          '/eban - бессрочно забанить игрока',
          '/lookup - увидеть информацию о банах',
          '/chatex clear - очистить чат',
          '/sudo <имя> <команда> - заставить игрока выполнить команду',
          '/tpall - телепортировать всех',
          '/setwarp - установить новый варп',
          '/delwarp - удалить варп',
          '/kill - убить игрока',
          '//copy - копировать выделенную обл. WE',
          '//cut - вырезать выделенную обл. WE',
          '//paste - вставить выделенную обл. WE',
          '//replace - заменить определенные блоки в выбранной обл.',
          'Максимум приватов: 11',
          'Максимум точек дома: 11',
          'Максимальный размер привата: 1kk',
          'Максимум лотов на аукционе: 26',
          'Максимальный объем изменений WorldEdit: 110k',
          'Вас невозможно кикнуть',
          'Ваш инвентарь невозможно редактировать',
          'В /seen видны аккаунты игрока, поиск IP и местоположение',
        ],
      },
      {
        name: 'Божество',
        cost: 1000,
        permissions: [
          '/rg redefine - изменить область уже созданного привата',
          '/etempbanip - временный бан ip',
          '//generate - генерация структуры WE',
          '//generatebiome - генерация биома WE',
          '//naturalize - натурализация области',
          '//smooth - сглаживание области',
          '//move - сдвинуть выделенную обл.',
          '//deform - деформация объекта',
          '//flora - высадить растительность в области',
          '//hollow - замена блоков за исключением контура',
          '//forest - генерация леса',
          'Максимум приватов: 20',
          'Максимум точек дома: 12',
          'Максимальный размер привата: 1,2kk',
          'Максимум лотов на аукционе: 40',
          'Максимальный объем изменений WorldEdit: 200k',
          'Вы можете менять gamemode другим игрокам',
          'Ваш инвентарь сохраняется при смерти',
          'На вас нельзя использовать /sudo',
          'Вас нельзя убить через /kill',
          'Вы можете бить игроков в режиме бога',
          'Нет кд на heal и feed',
          'AntiRelog не работает на вас, можно бить в креативе и тд..',
        ],
      },
      {
        name: 'Support',
        cost: 2000,
        permissions: [
          '/kickall - кикнуть всех, кроме Dev и Support',
          '/globalmask - глобальная маска WE',
          '/br - все доступные кисти WE',
          '//replacenear - заменить блоки в радиусе от вас',
          '//drain - осушить водоем',
          '//flip - отразить объект в буфере обмена',
          '//rotate - повернуть объект в буфере обмена',
          'Максимум приватов: 30',
          'Максимум точек дома: 13',
          'Максимальный размер привата: 1,5kk',
          'Максимум лотов на аукционе: 50',
          'Максимальный объем изменений WorldEdit: 300k',
          'Вас невозможно забанить!',
          'Нет ограничений в чате (реклама, спам)',
          'Можете выдать god и fly другим игрокам!!',
          'У вас есть доступ ко всем регионам!!',
          'Вы становитесь помощником игроков на сервере!!',
          'Вы можете наблюдать за соблюдением правил и НАКАЗЫВАТЬ нарушителей!!',
        ],
      },
      {
        name: 'Dev',
        cost: 3000,
        permissions: [
          '/ebanip - бессрочный бан IP адреса',
          '/lp user info - информация об игроке, его правах и метаданных',
          '/createkit - создать набор',
          '/deletekit - удалить набор',
          '/eunban - разбанить игрока',
          '/eunbanip - разбанить IP',
          '/admvk - попасть в беседу администрации!!',
          '/custpr - установить себе любой префикс!!',
          'Максимум приватов: 40',
          'Максимум точек дома: 14',
          'Максимальный размер привата: 2kk',
          'Максимум лотов на аукционе: 60',
          'Максимальный объем изменений WorldEdit: 500k',
          'Доступны все флаги WorldGuard!!',
          'Вас нельзя кикнуть даже kickall!!',
          'Вы можете изменять эндерсундуки других игроков!!',
          'Вы можете выдать ваниш, мини-консоль другому игроку!!',
          'Вы можете выключить тп, установить скорость или выдать набор др. игроку!!',
          'Вы можете использовать любые блоки в WorldEdit!!',
          'Вы входите в команду проекта!!',
          'Только вы можете разбанивать игроков!!',
          'ВАШИ ПРАВА БЛИЗКИ К МАКСИМАЛЬНЫМ!!',
        ],
      },
    ],
  },
  {
    name: 'Эффекты вокруг персонажа',
    donates: [
      {
        name: 'Частицы',
        cost: '100р',
        permissions: [
          'Доступ ко всем видам частиц',
          'Подробнее можно посмотреть на любом из серверов',
          '/menu -> "Эффекты"',
        ],
      },
      {
        name: 'Блоки',
        cost: '100р',
        permissions: [
          'Доступ ко всем видам блоковых эффектов (под вами появятся временные блоки)',
          'Подробнее можно посмотреть на любом из серверов',
          '/menu -> "Эффекты"',
        ],
      },
      {
        name: 'Дождевые эффекты',
        cost: '100р',
        permissions: [
          'Доступ ко всем видам дождевых эффектов (над головой появится обако из которого будут выпадать предметы)',
          'Подробнее можно посмотреть на любом из серверов',
          '/menu -> "Эффекты"',
        ],
      },
      {
        name: 'Крылья',
        cost: '100р',
        permissions: [
          'Доступ ко всем видам крыльев (Крылья из частиц за спиной персонажа)',
          'Подробнее можно посмотреть на любом из серверов',
          '/menu -> "Эффекты"',
        ],
      },
    ],
  },
  {
    name: 'Rainfall Vanilla',
    donates: [
      {
        name: 'Доступ к серверу',
        cost: '200р',
        permissions: [
          'Вы сможете играть на закрытом сервере Rainfall',
          'Самое то для совместной игры с друзьями',
        ],
      },
    ],
  },
]

module.exports = donateInfo
