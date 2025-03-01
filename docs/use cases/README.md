# Модель прецедентів

## Діаграма прецедентів 

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>


@startuml


    actor "Користувач" as User 
    actor "Адміністратор" as Admin

    usecase "Створити обліковий запис" as SIGN_UP 
    usecase "Авторизуватися" as LOG_IN 
    usecase "Почати пошук даних" as SEARCH 
    usecase "Звернутися до Адміністратора" as HELP 
    usecase "Додати нове джерело" as ADD_SRC 
    usecase "Надати прав" as ADD_RIGHTS
    usecase "Отримати статистику" as GET_STAT

    User -d-> SIGN_UP
    User -l-> LOG_IN
    User -> SEARCH

    Admin ---> HELP
    Admin ---> ADD_SRC
    Admin ---> ADD_RIGHTS
    Admin ---> GET_STAT

    Admin ---|> User
@enduml


</center>

## Usecases для користувача 

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>


@startuml


    actor "Користувач" as User

    usecase "Створити обліковий запис" as SIGN_UP 
    usecase "Авторизуватися" as LOG_IN 
    usecase "Почати пошук даних" as SEARCH
    usecase "Відновити профіль" as RECOVER  
    usecase "Фільтрувати пошук" as FILTER_SEARCH
    usecase "Сортирувати пошук" as SORT_SEARCH

    User -d-> SIGN_UP
    User -l-> LOG_IN
    User -> SEARCH

    RECOVER ..> LOG_IN:extends

    FILTER_SEARCH .l.> SEARCH:extends
    SORT_SEARCH ..> SEARCH:extends


@enduml


</center>

## Usecases для адміністратора 

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml


    actor "Адміністратор" as Admin

    usecase "Звернутися до Адміністратора" as HELP 
    usecase "Додати нове джерело" as ADD_SRC 
    usecase "Надати прав" as ADD_RIGHTS
    usecase "Отримати статистику" as GET_STAT
    usecase "Фільтрувати статистику" as FILTR_STAT
    usecase "Сортирувати статистику" as SORT_STAT
    usecase "Отримати данні про користувача" as GET_USR_DATA


    Admin -l-> HELP
    Admin -r-> ADD_SRC
    Admin --> ADD_RIGHTS
    Admin --> GET_STAT

    GET_USR_DATA ..> HELP:extends
    FILTR_STAT .u.> GET_STAT:extends
    SORT_STAT .u.> GET_STAT:extends


@enduml

</center>

### Додати нове джерело
| **_ID:_**                | ADMIN.ADDSRC                                                                                                          |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------|
| **_НАЗВА:_**             | Додати джерела інформації                                                                                             |
| **_УЧАСНИКИ:_**          | Адміністратор, Система                                                                                                |
| **_ПЕРЕДУМОВИ:_**        | Адміністратор хоче додати нове джерело                                                                                |
| **_РЕЗУЛЬТАТ:_**         | Додавання нових джерел інформації у систему                                                                           |
| **_ВИКЛЮЧНІ СИТУАЦІЇ:_** | ADNEX.002 Джерела не дійсні.                                                                                          |
| **_ОСНОВНИЙ СЦЕНАРІЙ:_** | 1. Адміністратор створює нове джерело інформації, натискуючи на відповідну кнопку.                                    |
|                          | 2. Адміністратор вводить посилання на джерело.                                                                        |
|                          | 3. Адміністратор надає опис джерела.                                                                                  |
|                          | 4. Джерело проходить перевірку на валідність.(можливо ADNEX.002)                                                      |
|                          | 5. Система додає нове джерело до списку доступних джерел інформації.                                                  |


<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

    
@startuml


    |Адміністратор|
        start
        :Адміністратор здійснює запит
        на створення нового
        джерела інформації;
        :Адміністратор ввводить посилання
        на джерело;
        :Адміністратор надає опис джерела;
        :Адміністратор надсилає джерело
        на перевірку системі;
    |Система|
        :Система перевіряє джерело
        на вадлідність;
        note right #ffaaaa

        <b> ADNEX.002

        end note
        :Система додає нове джерело
        до списку джерел інформації;
    |Адміністратор|
        stop;


@enduml
        
</center>

    
### Надати прав
| **_ID:_**                | ADMIN.ADDRIGHTS                                                                                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------|
| **_НАЗВА:_**             | Надати прав користувачам                                                                                              |
| **_УЧАСНИКИ:_**          | Користувач, Адміністратор, Система                                                                                    |
| **_ПЕРЕДУМОВИ:_**        | Користувач потребує додаткові права                                                                                   |
| **_РЕЗУЛЬТАТ:_**         | Користувач отримує додаткові права                                                                                    |
| **_ВИКЛЮЧНІ СИТУАЦІЇ:_** | ADNEX.003.001 Користувача не було знайдено в системі.                                                                 |
|                          | ADNEX.003.002 Користувач вже отримав усі додаткові права.                                                             |
| **_ОСНОВНИЙ СЦЕНАРІЙ:_** | 1. Користувач надає запит на отримання додаткових прав                                                                |
|                          | 2. Адміністратор отримує запит на додання прав.                                                                       |
|                          | 3. Адміністратор надає додаткові права користувачу.(можливо ADNEX.003.001 ADNEX.003.002)                              |
|                          | 4. Користувач отримує додаткові права                                                                                 |


<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
    
@startuml


    |Користувач|
        start
        :Користувач створює запит
        на отримання додаткових
        прав;
    |Адміністратор|
        :Адміністратор отримує запит;
        :Адміністратор створює запит
        щоб надати нові права
        користувачу;
    |Система|
        :Система перевіряє користувача;
        note right #ffaaaa

            <b> ADNEX.003.001
            <b> ADNEX.003.002
        end note
        :Система надає нові права
        користувачу;
    |Користувач|
        stop;


@enduml
                
</center>


### Отримати статистику
| **_ID:_**                | ADMIN.GETSTAT                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------|
| **_НАЗВА:_**             | Отримати статистику користувачів за проміжок часу                                                                     |
| **_УЧАСНИКИ:_**          | Адміністратор, Система                                                                                                |
| **_ПЕРЕДУМОВИ:_**        | Адміністратор має права доступу до статистики                                                                         |
| **_РЕЗУЛЬТАТ:_**         | Адміністратор отримає статистику користувачів за проміжок часу                                                        |
| **_ВИКЛЮЧНІ СИТУАЦІЇ:_** | ADNEX.004 Система не змогла зібрати статистику за проміжок часу.                                                      |
| **_ОСНОВНИЙ СЦЕНАРІЙ:_** | 1. Адміністратор обирає проміжок часу для збору даних                                                                 |
|                          | 2. Адміністратор робить запит на статистику за обраний проміжок часу                                                  |
|                          | 3. Система отримує запит                                                                                              |
|                          | 4. Система шукає дані за обраний проміжок часу                                                                        |
|                          | 5. Система надає дані адміністратору. (можливо ADNEX.004)                                                             |
|                          | 6. Адміністратор отримує дані                                                                                         |
|                          | 7. Адміністратор маніпулює даними                                                                                     |                                              

      
                
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

                
@startuml


    |Адміністратор|
        start
        :Адміністратор здійснює запит
        для отримання статистики
        користувачів;
        :Адміністратор обирає проміжок
        часу для збору даних;
    |Система|
        :Система отримує запит;
        :Система шукає дані
        за обраний проміжок часу;
        :Система надає дані
        адміністратору;
        note right #ffaaaa

        <b> ADNEX.004

        end note
    |Адміністратор|
        :Адміністратор отримує дані;
        stop;

            
@enduml
            
</center>

### Звернутись до адміністратора
| **_ID:_**                | ADMIN.HELP                                                                                                            |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------|
| **_НАЗВА:_**             | Звернутись до адміністратора                                                                                          |
| **_УЧАСНИКИ:_**          | Користувач, Адміністратор                                                                                             |
| **_ПЕРЕДУМОВИ:_**        | Користувач не може самостійно вирішити проблему                                                                       |
| **_РЕЗУЛЬТАТ:_**         | Звернення до адміністратора за допомогою у вирішенні проблеми                                                         |
| **_ВИКЛЮЧНІ СИТУАЦІЇ:_** | ADNEX.001 Запит користувача не дійшов до адміністратора.                                                              |
| **_ОСНОВНИЙ СЦЕНАРІЙ:_** | 1. У користувача виникає проблема                                                                                     |
|                          | 2. Користувач активує кнопку для звернення до адміністратора.(можливо ADNEX.001)                                      |
|                          | 3. Користувач передає адміністратору опис проблеми.                                                                   |
|                          | 4. Адміністратор вирішує проблему користувача.                                                                        |
|                          | 5. Адміністратор повідомляє користувача про знайдене рішення.                                                         |
|                          | 6. Користувач отримує рішення своєї проблеми.                                                                         |

    
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
                

@startuml


|Користувач|
    start
    :Користувач активує звернення
    до адміністратора;
    note right #ffaaaa

        <b> USREX.003

    end note
    :Користувач передає адміністратору
    опис проблеми;
|Адміністратор|
    :Адміністратор вирішує проблему;
    :Адміністратор повідомляє користувача
    про знайдене рішення;
|Користувач|
    :Користувач отримує рішення проблеми;
    stop;


@enduml
            
            
</center>
    
    
### Авторизація
| **_ID:_**                | USER.LOGIN                                                                                                            |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------|
| **_НАЗВА:_**             | Авторизувати користувача в обліковий запис                                                                            |
| **_УЧАСНИКИ:_**          | Користувач, Система                                                                                                   |
| **_ПЕРЕДУМОВИ:_**        | Користувач зареєстрований в системі                                                                                   |
| **_РЕЗУЛЬТАТ:_**         | Користувач отримав доступ до свого облікового запису                                                                  |
| **_ВИКЛЮЧНІ СИТУАЦІЇ:_** | USREX.002.001 Обліковий запис з введеними даними не існує                                                             |
|                          | USREX.002.002 Під час авторизації введений неправильний пароль                                                        |
| **_ОСНОВНИЙ СЦЕНАРІЙ:_** | 1. Користувач натискає на кнопку входу в обліковий запис                                                              |
|                          | 2. Система отримує запит на авторизацію                                                                               |
|                          | 3. Користувач отримує форму для входу в обліковий запис                                                               |
|                          | 4. Користувач заповнює форму, вводить необхідні дані для авторизації                                                  |
|                          | 5. Користувач відправляє форму авторизації шляхом натискання на кнопку                                                |
|                          | 6. Система отримує надіслану користувачем форму.                                                                      |
|                          | 7. Система перевіряє дані, надіслані користувачем.(можливо USREX.002.001 USREX.002.002)                               |
|                          | 8. Система надає доступ користувачу до його облікового запису                                                         |

   
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    
|Користувач|
    start
    :Користувач надсилає запит на авторизацію;
|Система|
    :Система отримує запит на авторизацію;
    :Система відсилає форму для входу в обліковий запис;
|Користувач|
    :Користувач вводить дані у форму авторизації;
    :Користувач відправляє форму;
|Система|
    :Система отримує заповнену форму;
    :Система перевіряє дані з форми авторизації;
    note right #ffaaaa

        <b> USREX.002.001
        <b> USREX.002.002

    end note
    :Система надає доступ користувачу до його облікового запису;
|Користувач|
    :Користувач отримує доступ в свій обліковий запис;
    stop;
    

@enduml
    
</center>
            
       
### Пошук даних
| **_ID:_**                | USER.SEARCH                                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------|
| **_НАЗВА:_**             | Пошук та аналіз даних за заданими користувачем  параметрами                                                           |
| **_УЧАСНИКИ:_**          | Користувач, Система                                                                                                   |
| **_ПЕРЕДУМОВИ:_**        | Користувач виконав авторизацію в свій обліковий запис                                                                 |
| **_РЕЗУЛЬТАТ:_**         | Користувач отримав інформацію, зібрану та проаналізовану системою                                                     |
| **_ВИКЛЮЧНІ СИТУАЦІЇ:_** | USREX.003 Система не знайшла інформації за запитом користувача                                                        |
| **_ОСНОВНИЙ СЦЕНАРІЙ:_** | 1. Користувач створює запит системі на пошук інформації                                                               |
|                          | 2. Система відправляє користувачу форму з фільтрами, для більш детального пошуку інформації                           |
|                          | 3. Корисутвач заповнює форму з фільтрами                                                                              |
|                          | 4. Користувач відправляє форму з фільтрами шляхом натискання на кнопку                                                |
|                          | 5. Система отримує запит користувача на пошук та аналіз інформації по деяким параметрам                               |
|                          | 6. Система проводить пошук інформації по заданим користувачем параметрам.(можливо USREX.003)                          |
|                          | 7. Система формує звіт по знайденій інформації                                                                        |
|                          | 8. Користувач отримує результат пошуку та аналізу інформації системою                                                 |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    
|Користувач|
    start
    :Користувач надсилає запит для пошуку інформації;
|Система|
    :Система отримує запит;
    :Система відсилає форму з фільтрами для більш детального пошуку;
|Користувач|
    :Користувач заповнює форму;
    :Користувач відправляє форму;
|Система|
    :Система отримує заповнену форму;
    :Система проводить пошук інформації;
    note right #ffaaaa

        <b> USREX.003

    end note
    :Система формує звіт по знайденій інформації;
|Користувач|
    :Користувач отримує інформацію;
    stop;
    

@enduml
    
</center>
    
    

### Створення нового облікового запису
| **_ID:_**                | USER.SIGNUP                                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------|
| **_НАЗВА:_**             | Зареєструвати нового користувача                                                                                      |
| **_УЧАСНИКИ:_**          | Користувач, Система                                                                                                   |
| **_ПЕРЕДУМОВИ:_**        | Користувач не зареєстрований в системі                                                                                |
| **_РЕЗУЛЬТАТ:_**         | Користувач створив новий обліковий запис                                                                              |
| **_ВИКЛЮЧНІ СИТУАЦІЇ:_** | USREX.001.001 Обліковий запис з введеними даними вже існує.                                                           |
|                          | USREX.001.002 Під час реєстрації введені некоректні дані(електронна пошта)                                            |
| **_ОСНОВНИЙ СЦЕНАРІЙ:_** | 1. Користувач запускає початок реєстрації шляхом нажимання кнокпи, тощо...                                            |
|                          | 2. Система отримує запит на створення нового облікового запису.                                                       |
|                          | 3. Користувач отримує форму реєстрації нового облікового запису, надісланного від системи.                            |
|                          | 4. Користувач заповнює форму, вводить дані( логін, електронна пошта, пароль, тощо...)                                 |
|                          | 5. Користувач відправляє форму реєстрацію шляхом натискання на кнопку.                                                |
|                          | 6. Система отримує надіслану користувачем форму.(можливо USREX.001.001 USREX.001.002)                                 |
|                          | 7. Система реєструє обліковий запис з даними(вносить їх в відповідну базу даних, тощо...), які відправив користувач.  |
|                          | 8. Система надсилає користувачу сповіщення про успішну реєстрацію.                                                    |

   
    
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml
    
|Користувач|
    start
    :Користувач надсилає запит на реєстрацію;
|Система|
    :Система отримує запит на реєстрацію;
    :Система відсилає форму на реєстрацію;
|Користувач|
    :Користувач вводить дані у форму реєстрації;
    :Користувач відправляє форму;
|Система|
    :Система отримує заповнену форму;
    :Система перевіряє дані з форми реєстрації;
    note right #ffaaaa

        <b> USREX.001.001
        <b> USREX.001.002

    end note
    :Система реєструє обліковий запис;
    :Система надсилає сповіщення про успішну реєстрацію;
|Користувач|
    stop;

@enduml
    
</center>
    
