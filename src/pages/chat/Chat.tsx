import style from './chat.module.scss'
function Chat() {
  const messages = [
    {
      id: 1,
      sender: 'nikita',
      name: 'Nikita',
      avatar: '/this_is_fine.png',
      text: 'Привет! Как дела?',
      time: '2025-06-16T10:00:00',
    },
    {
      id: 4,
      sender: 'me',
      avatar: '/this_is_fine.png',
      text: 'Привет! Всё отлично, спасибо. А у тебя?',
      time: '2025-06-16T10:01:00',
    },
    {
      id: 2,
      sender: 'me',
      avatar: '/this_is_fine.png',

      text: 'Привет! Всё отлично, спасибо. А у тебя?',
      time: '2025-06-16T10:01:00',
    },
    {
      id: 3,
      sender: 'nikita',
      name: 'Nikita',
      avatar: '/this_is_fine.png',
      text: 'Тоже хорошо! Погнали дальше работать над проектом 🚀',
      time: '2025-06-16T10:02:00',
    },
    {
      id: 4,
      sender: 'me',
      avatar: '/this_is_fine.png',
      text: 'Конечно! Уже в деле.',
      time: '2025-06-16T10:03:00',
    },
  ]

  return (
    <div className={style.container}>
      <aside className={style.conversations}>
        <h2 className={style.logo}>itcareerhub</h2>
        <ul className={style.userList}>
          <li className={style.user}>
            <img src='/avatar1.jpg' alt='nikita' />
            <div>
              <div className={style.name}>nikita</div>
              <div className={style.preview}>Nikita sent a message.</div>
            </div>
            <span className={style.time}>2w</span>
          </li>
          <li className={style.user}>
            <img src='/avatar2.jpg' alt='sasha' />
            <div>
              <div className={style.name}>sashaa</div>
              <div className={style.preview}>Sashaa sent a message.</div>
            </div>
            <span className={style.time}>2w</span>
          </li>
        </ul>
      </aside>

      <main className={style.chatArea}>
        <header className={style.chatHeader}>
          <div className={style.userInfo}>
            <img src='/avatar1.jpg' alt='nikita' />
            <div>
              <div className={style.name}>nikita</div>
              <div className={style.username}>nikita • ICHgram</div>
            </div>
          </div>
          <button className={style.viewProfile}>View profile</button>
        </header>

        <div className={style.timestamp}>Jun 26, 2024, 08:49 PM</div>

        <div className={style.messages}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`${style.message} ${
                msg.sender === 'me' ? style.outgoing : style.incoming
              }`}
            >
              {msg.sender === 'me' ? (
                <div className={style.bubbleWithInitial}>
                  <p>{msg.text}</p>

                  <img
                    className={style.userInitial}
                    src={msg.avatar}
                    alt={msg.name}
                  />
                </div>
              ) : (
                <>
                  <img src={msg.avatar} alt={msg.name} />
                  <p>{msg.text}</p>
                </>
              )}
            </div>
          ))}
        </div>

        <form className={style.messageInput}>
          <input type='text' placeholder='Write message' />
        </form>
      </main>
    </div>
  )
}
export default Chat
