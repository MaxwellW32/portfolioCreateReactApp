import { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import emailjs from "@emailjs/browser";

function Socials({ name, heading, children }) {
  return (
    <Link to="/portfolio">
      <div className="indivSocialCont">
        <div className="indivSocialContSvgCont">{children}</div>
        <p>{name}</p>
        <p>{heading}</p>
      </div>
    </Link>
  );
}

let interval;

function TitleText() {
  const [codeText, setCodeText] = useState(`CODING`);
  const [currentStatement, setCurrentStatement] = useState(0);

  useEffect(() => {
    startAuto();

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (textArray[currentStatement].canEdit) {
      document.querySelector(".glitch").innerText =
        textArray[currentStatement].glitchText;
    } else {
      document.querySelector(".gYellow").innerText =
        textArray[currentStatement].glitchText;
    }
  }, [currentStatement]);

  function startAuto() {
    //start title slider
    interval = setInterval(() => {
      // setCurrentStatement(0);
      document.querySelector(".bigTitle").style.transition = "opacity 1500ms";
      document.querySelector(".bigTitle").style.opacity = "1";

      setCurrentStatement((prevNum) => (prevNum + 1) % textArray.length);

      setTimeout(() => {
        document.querySelector(".bigTitle").style.transition = "opacity 1000ms";
        document.querySelector(".bigTitle").style.opacity = "0";
      }, 3000);
    }, 4000);
  }

  const textArray = [
    {
      statement: "I LOVE",
      glitchText: codeText,
      canEdit: true,
    },
    {
      statement: "I LOVE",
      glitchText: "LEARNING",
      canEdit: false,
    },
    {
      statement: "LET'S",
      glitchText: "CREATE",
      canEdit: false,
    },
  ];

  return (
    <div>
      <p className="normalText">
        CREATIVE - SOFTWARE ENGINEER - FULLSTACK WEB DEVELOPER
      </p>

      <p className="bigTitle">
        {textArray[currentStatement].statement}{" "}
        <span
          contentEditable={textArray[currentStatement].canEdit}
          data-text={textArray[currentStatement].glitchText}
          className={textArray[currentStatement].canEdit ? "glitch" : "gYellow"}
          onInput={(e) => {
            setCodeText(e.target.innerText);
            clearInterval(interval);
            setTimeout(() => {
              document.querySelector(".bigTitle").style.opacity = "1";
            }, 3000);
          }}
          onBlur={startAuto}
        ></span>
      </p>

      <br />
      <Link to="/portfolio/#ServiceStart">
        <button>WHAT I CAN DO</button>
      </Link>
    </div>
  );
}

let gravityInterval = "goAgain";

const playerInfo = {
  positionX: 0,
  positionY: 900,
  canMove: true,
  playerWidth: 5,
  playerHeight: function () {
    return this.playerWidth * 2;
  },
};

function Home() {
  useEffect(() => {
    document.querySelectorAll(".homeSection").forEach((e) => {
      e.setAttribute("tabindex", "0");
    });
  }, []);
  const skillsGroup = [
    {
      imgUrl:
        "https://images.pexels.com/photos/9822732/pexels-photo-9822732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "SEO Optimization",
      description: "desc",
    },

    {
      imgUrl:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "React",
      description: "desc",
    },

    {
      imgUrl:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "JavaScript",
      description: "desc",
    },

    {
      imgUrl:
        "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Django",
      description: "desc",
    },

    {
      imgUrl:
        "https://images.pexels.com/photos/11035474/pexels-photo-11035474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Python",
      description: "desc",
    },

    {
      imgUrl:
        "https://www.zend.com/sites/default/files/image/2020-04/image-blog-mysql-php.jpg",
      title: "MySQL",
      description: "desc",
    },

    {
      imgUrl:
        "https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Git",
      description: "desc",
    },

    {
      imgUrl:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "HTML & CSS",
      description: "desc",
    },

    {
      imgUrl:
        "https://www.101computing.net/wp/wp-content/uploads/responsive-layout-website-design.png",
      title: "Responsive design",
      description: "desc",
    },

    {
      imgUrl:
        "https://images.pexels.com/photos/10376172/pexels-photo-10376172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Accessibility optimization",
      description: "desc",
    },
  ];

  const skillsGroupMap = skillsGroup.map((eachItem) => {
    return (
      <div className="homeSkillsContIndiv" key={eachItem.title}>
        <img src={eachItem.imgUrl} />
        <strong>{eachItem.title}</strong>
      </div>
    );
  });

  const projectGroup = [
    {
      imgUrl:
        "https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Video Generator",
      link: "/videoGenerator",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/6940978/pexels-photo-6940978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Donut Store",
      link: "/donut",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Art Canvas",
      link: "/artDraw",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/1370293/pexels-photo-1370293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Dictionary",
      link: "/dictionary",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/929280/pexels-photo-929280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Perspective Playground",
      link: "/perspectiveLearning",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/6927334/pexels-photo-6927334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Calculator",
      link: "/calculator",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/268351/pexels-photo-268351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "To Do App",
      link: "/toDo",
    },

    {
      imgUrl:
        "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Eccomerce",
      link: "/techHaven",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Blog",
      link: "#",
    },

    {
      imgUrl:
        "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Weather App",
      link: "#",
    },
  ];

  const projectGroupMap = projectGroup.map((eachItem, index) => {
    return (
      <div
        style={{ backgroundImage: `url(${eachItem.imgUrl})` }}
        className="homeSecWorkIndiv"
        key={index}
      >
        <h3>
          <Link to={eachItem.link}>{eachItem.text}</Link>
        </h3>
        {eachItem.link === "#" ? <p>Coming soon</p> : null}
      </div>
    );
  });

  const initialFormState = {
    cxName: "",
    cxNameIsValid: true,

    cxPhoneNumber: "",
    cxPhoneNumberIsValid: true,

    cxEmail: "",
    cxEmailIsValid: true,

    cxMessage: "",
    cxMessageIsValid: true,
  };
  const [formData, setFormData] = useState(initialFormState);
  const [formTouched, setFormTouched] = useState(false);
  const [canShowModal, setCanShowModal] = useState({
    modalShowing: false,
    sentSuccess: false,
    statusMessage: "",
  });

  function handleForm(field, e) {
    if (field === "nameInput") {
      setFormData((prevData) => {
        let nameValid =
          prevData.cxName.length >= 2 && prevData.cxName.length <= 49;

        return {
          ...prevData,
          cxName: e.target.value,
          cxNameIsValid: nameValid,
        };
      });
    } else if (field === "phoneInput") {
      setFormData((prevData) => {
        const phoneNumberPattern = /^[\d\-\(\)\s]+$/;
        let numberValid =
          prevData.cxPhoneNumber.length <= 15 &&
          phoneNumberPattern.test(e.target.value);

        if (prevData.cxPhoneNumber.length <= 1) {
          numberValid = true;
        }
        return {
          ...prevData,
          cxPhoneNumber: e.target.value,
          cxPhoneNumberIsValid: numberValid,
        };
      });
    } else if (field === "emailInput") {
      setFormData((prevData) => {
        let validEmail =
          prevData.cxEmail.length > 1 && e.target.value.includes("@");
        return {
          ...prevData,
          cxEmail: e.target.value,
          cxEmailIsValid: validEmail,
        };
      });
    } else if (field === "messageInput") {
      setFormData((prevData) => {
        let validMessage = prevData.cxMessage.length > 1;

        return {
          ...prevData,
          cxMessage: e.target.value,
          cxMessageIsValid: validMessage,
        };
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        `service_i29q1eu`,
        `template_u4dq9ge`,
        e.target,
        `rKzfrKZJI8d6o86V-`
      )
      .then(
        function (response) {
          if (
            response.status === 200 ||
            response.status === 202 ||
            response.status === 204
          ) {
            setCanShowModal((prevData) => {
              return {
                ...prevData,
                modalShowing: true,
                sentSuccess: true,
                statusMessage: `All Good signal code ${response.status}`,
              };
            });

            setFormData(initialFormState);
            setFormTouched(false);
          }
        },
        function (error) {
          setCanShowModal((prevData) => {
            return {
              ...prevData,
              modalShowing: true,
              sentSuccess: false,
              statusMessage: error,
            };
          });
        }
      );
  }

  const playerRef = useRef(null);

  function startGravity() {
    let maxYPosition = (100 / playerInfo.playerHeight()) * 100 - 100;

    gravityInterval = setInterval(() => {
      if (playerInfo.positionY > maxYPosition) {
        clearInterval(gravityInterval);
        gravityInterval = "goAgain";
      } else {
        playerRef.current.style.translate = `${
          playerInfo.positionX
        }% ${(playerInfo.positionY += 5)}%`;
      }
    }, 10);
  }
  const starterOff = useRef(null);

  useEffect(() => {
    // detect keyboard show player
    //make main div focused

    starterOff.current.focus();

    function handleKey(e) {
      if (e.key) {
        document.getElementById("player").style.display = "block";
        window.removeEventListener("keydown", handleKey);
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      ref={starterOff}
      tabIndex={0}
      id="homeContDiv"
      onKeyDown={(e) => {
        if (e.key.toLowerCase() === "w") {
          //gravity is constant until it hits th floor
          //gravity also stops when i press w
          //then starts again afyer a second
          //gravity does not star again unless the user leaves the keyboard for 200ms

          if (gravityInterval === "goAgain") {
            startGravity();
          }

          if (playerInfo.positionY - 500 < 0) {
            playerInfo.positionY = 0;
          } else {
            playerInfo.positionY -= 500;
          }

          playerRef.current.style.translate = `${playerInfo.positionX}% ${playerInfo.positionY}%`;
        } else if (e.key.toLowerCase() === "a") {
          if (playerInfo.positionX - 200 < 0) {
            playerInfo.positionX = 0;
          } else {
            playerInfo.positionX -= 200;
          }

          playerRef.current.style.transform = `rotateY(0deg)`;
          playerRef.current.style.translate = `${playerInfo.positionX}% ${playerInfo.positionY}%`;
        } else if (e.key.toLowerCase() === "s") {
          let maxYPosition = (100 / playerInfo.playerHeight()) * 100 - 100;

          if (playerInfo.positionY + 200 > maxYPosition) {
            playerInfo.positionY = maxYPosition;
          } else {
            playerInfo.positionY += 200;
          }

          playerRef.current.style.translate = `${playerInfo.positionX}% ${playerInfo.positionY}%`;
        } else if (e.key.toLowerCase() === "d") {
          let maxXPosition = (100 / playerInfo.playerWidth) * 100 - 100;

          if (playerInfo.positionX + 200 > maxXPosition) {
            playerInfo.positionX = maxXPosition;
          } else {
            playerInfo.positionX += 200;
          }

          playerRef.current.style.transform = `rotateY(180deg)`;
          playerRef.current.style.translate = `${playerInfo.positionX}% ${playerInfo.positionY}%`;
        }
      }}
    >
      <div
        style={{
          "--playerWidth": `${playerInfo.playerWidth}%`,
          "--playerHeight": `${playerInfo.playerHeight()}%`,
          "--playerY": `${playerInfo.positionY}%`,
          "--playerX": `${playerInfo.positionX}%`,
        }}
        id="player"
        ref={playerRef}
      ></div>
      <div id="hmBackgroundImgCont">
        <TitleText />
      </div>
      <main id="homeMain">
        <section id="whatIOffer" className="homeSection homeSecAbout">
          <h1 className="BigHeader">ABOUT ME</h1>
          <p className="homeSecAboutWho">
            I am a certified full stack developer that provides end-to-end web
            solutions to businesses and organizations of all sizes. I focus on
            creating high-quality websites and applications that are tailored to
            meet the specific needs of any client I work with. I use
            cutting-edge technologies and design trends to deliver exceptional
            results. I specialize in React, JavaScript, HTML, CSS, Next.js, and
            AI integration, allowing me to provide fast and efficient solutions
            that exceed expectations.
          </p>

          <article className="featuresCont">
            <div className="featuresContIndiv">
              <img src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <h3 className="makeBold">App Development</h3>
              <p>
                I specialize in creating high-quality, customizable mobile apps
                for iOS and Android platforms. I use the latest technologies to
                create intuitive and user-friendly applications
              </p>
            </div>

            <div className="featuresContIndiv">
              <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <h3 className="makeBold">UI Design</h3>
              <p>
                I am also an expert in UI design, and create visually stunning
                and engaging user interfaces. My goal is to create designs that
                drive user engagement and increase conversion rates.
              </p>
            </div>

            <div className="featuresContIndiv">
              <img src="https://images.pexels.com/photos/7386013/pexels-photo-7386013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <h3 className="makeBold">Brand & Identity</h3>
              <p>
                I work with you to develop logos, color schemes, and other brand
                elements that reflect your unique values and identity.
              </p>
            </div>

            <div className="featuresContIndiv">
              <img src="https://images.pexels.com/photos/9301741/pexels-photo-9301741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <h3 className="makeBold">Consultancy</h3>
              <p>
                I also offer consultancy services to any businesses looking to
                improve their online presence. I provide advice on web design,
                development, and digital marketing strategies.
              </p>
            </div>
          </article>
        </section>
        <section
          style={{
            "--customBackground":
              "url(https://images.pexels.com/photos/4079948/pexels-photo-4079948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
          className="homeSection mottoSec"
        >
          <h1 className="BigHeader">MY PHILOSOPHY</h1>
          <p>
            I believe that the key to success is{" "}
            <span className="makeHighlighted">collaboration.</span> I work
            closely with clients to understand their unique needs and
            objectives, and use my{" "}
            <span className="makeHighlighted">experience</span> to turn their
            vision into a reality. I value transparency, communication, and
            accountability, and strive to build long-term relationships with my
            clients based on trust and mutual respect. Our goal is not just to
            deliver a website or application, but to create a lasting solution
            that drives business <span className="makeHighlighted">growth</span>{" "}
            and <span className="makeHighlighted">success</span>.
          </p>
        </section>

        <section style={{ textAlign: "center" }} className="homeSection ">
          <h1 className="BigHeader">Skills</h1>
          <p>
            I specialize in getting the best to my clients across multiple
            frameworks and libraries.
          </p>
          <article className="homeSkillsCont">{skillsGroupMap}</article>
        </section>
        <section
          style={{
            "--customBackground":
              "url(https://images.pexels.com/photos/2701434/pexels-photo-2701434.jpeg)",
          }}
          className="homeSection funfactsSec"
        >
          <h1 className="BigHeader">fun facts</h1>
          <p>
            The future of web development is bright, exciting and full of
            opportunities for meeting your needs. By leveraging new technologies
            and optimizing for user experience, web developers can stay ahead of
            the curve and provide our clients with the best possible results.
          </p>
          <article className="funFactsCont">
            <div>
              <strong>137%</strong>
              <p>
                Progressive Web Apps (PWAs) are becoming more popular and can
                provide a better user experience than traditional websites.
                According to Google, PWAs have a 3x higher conversion rate
                compared to traditional websites, and they can increase user
                engagement by up to 137%.
              </p>
            </div>

            <div>
              <strong>$125 billion</strong>
              <p>
                Augmented Reality (AR) and Virtual Reality (VR) technologies are
                becoming more accessible and can provide a more immersive user
                experience. According to a report by MarketsandMarkets, the AR
                and VR market is expected to reach $125 billion by 2026.
              </p>
            </div>

            <div>
              <strong>27%</strong>
              <p>
                Voice search is becoming more prevalent, and websites that are
                optimized for voice search can drive more traffic. According to
                Google, 27% of the global online population is using voice
                search on mobile.
              </p>
            </div>

            <div>
              <strong>41%</strong>
              <p>
                Artificial Intelligence (AI) and Machine Learning (ML) can be
                used to provide personalized content and recommendations to
                website visitors. This can increase engagement and drive more
                traffic to the website. According to a study by Salesforce,
                personalized emails have a 29% higher open rate and a 41% higher
                click-through rate compared to non-personalized emails.
              </p>
            </div>
          </article>
        </section>
        <section className="homeSection dropLine">
          <div className="border-animation">
            <h3 className="BigHeader droplLineHeader">
              <Link to="#ContactUsStart">Drop me a Line</Link>
            </h3>
          </div>
        </section>
        <section
          style={{
            "--customBackground":
              "url(https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
          id="ServiceStart"
          className="homeSection serviceSec"
        >
          <h1 className="BigHeader">My Services</h1>
          <p style={{ textAlign: "center" }}>
            My quality standards apply also in terms of service, technical
            expertise and advice. I are happy to assist you with know-how and
            experience in your daily business.
          </p>
          <article className="servicesCont">
            <div>
              <img
                className="servicesContImg"
                src="https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <strong>Consulting</strong>
              <p>
                I also go beyond just offering advice. I work with clients to
                identify opportunities for growth and improvement. I can provide
                insights on everything from web design and development, to
                digital marketing and SEO.
              </p>
            </div>

            <div className="goRight">
              <img
                className="servicesContImg"
                src="https://images.pexels.com/photos/3865544/pexels-photo-3865544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <strong>Systems Integration</strong>
              <p>
                I also specialize in systems integration, allowing my clients to
                connect and streamline their business processes across different
                platforms and technologies. I have extensive experience in
                integrating complex systems and APIs, ensuring seamless
                communication between applications and platforms.
              </p>
            </div>

            <div>
              <img
                className="servicesContImg"
                src="https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <strong>Support</strong>
              <p>
                My commitment goes beyond project delivery. I offer ongoing
                support and maintenance services to ensure that our clients'
                websites and applications are always up-to-date and functioning
                optimally. My support services include bug fixing, security
                updates, and performance optimization.
              </p>
            </div>

            <div className="goRight">
              <img
                className="servicesContImg"
                src="https://images.pexels.com/photos/13801629/pexels-photo-13801629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <strong>Satisfaction Gurantee</strong>
              <p>
                I am confident in my ability to deliver exceptional results.
                That's why I offer a satisfaction guarantee to everyone I work
                with. If for any reason you are not satisfied with my services,
                we'll make sure we get it right. My goal is to build long-term
                relationships with our clients based on trust, transparency, and
                exceptional service.
              </p>
            </div>
          </article>
        </section>
        <section id="projectListStart" className="homeSection workSec">
          <h1 className="BigHeader">Projects</h1>
          <p>
            I believe my work speaks for itself. Browse my most recent projects
            below.
          </p>
          <div className="homeSecWorkCont">{projectGroupMap}</div>
        </section>

        <section
          style={{
            "--customBackground":
              "url(https://images.pexels.com/photos/1714203/pexels-photo-1714203.jpeg)",
          }}
          id="ContactUsStart"
          className="homeSection contactSec"
        >
          <h1 className="BigHeader">Contact Us</h1>
          <p>Got any questions? Feel free to reach out.</p>
          <article className="contactSecCont">
            <div>
              <p className="contactSecHeading">Our address</p>
              <ul>
                <li className="contactSecLi">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                  </svg>
                  <p>
                    100 Biscayne Blvd. (North) 21st Floor New World Tower
                    Kingston, Jamaica 33148
                  </p>
                </li>
                <li className="contactSecLi">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>{" "}
                  <p>(876) 555-4446</p>
                </li>
                <li className="contactSecLi">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>{" "}
                  <p>maxwell@maxdevdesign.com</p>
                </li>
                <li className="contactSecLi">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                  </svg>{" "}
                  <p>www.maxreactbuilder.com</p>
                </li>
              </ul>
            </div>

            <div>
              <p className="contactSecHeading">Drop us a line</p>
              <form type="POST" onSubmit={handleSubmit}>
                <div className="contactFormGridCont">
                  <input
                    id="cxName"
                    name="cxName"
                    placeholder="Name"
                    type="text"
                    onChange={(e) => {
                      handleForm("nameInput", e);
                    }}
                    required
                    className={
                      formTouched
                        ? formData.cxNameIsValid
                          ? "inputValid"
                          : "inputInValid"
                        : null
                    }
                    value={formData.cxName}
                    onBlur={() => {
                      setFormTouched(true);
                    }}
                  />
                  <input
                    id="cxEmail"
                    name="cxEmail"
                    placeholder="E-Mail"
                    type="email"
                    onChange={(e) => {
                      handleForm("emailInput", e);
                    }}
                    required
                    value={formData.cxEmail}
                    onBlur={() => {
                      setFormTouched(true);
                    }}
                    className={
                      formTouched
                        ? formData.cxEmailIsValid
                          ? "inputValid"
                          : "inputInValid"
                        : null
                    }
                  />
                  <input
                    id="cxTel"
                    name="cxTel"
                    placeholder="Phone"
                    type="tel"
                    onChange={(e) => {
                      handleForm("phoneInput", e);
                    }}
                    value={formData.cxPhoneNumber}
                    onBlur={() => {
                      setFormTouched(true);
                    }}
                    className={
                      formData.cxPhoneNumber.length > 1 && formTouched
                        ? formData.cxPhoneNumberIsValid
                          ? "inputValid"
                          : "inputInValid"
                        : null
                    }
                  />
                  <textarea
                    style={{ wordWrap: "break-word" }}
                    id="cxMessage"
                    name="cxMessage"
                    placeholder="Message"
                    onChange={(e) => {
                      handleForm("messageInput", e);
                    }}
                    required
                    value={formData.cxMessage}
                    onBlur={() => {
                      setFormTouched(true);
                    }}
                    className={
                      formTouched
                        ? formData.cxMessageIsValid
                          ? "inputValid"
                          : "inputInValid"
                        : null
                    }
                  />
                </div>

                <button
                  disabled={
                    formData.cxNameIsValid &&
                    formData.cxEmailIsValid &&
                    formData.cxMessageIsValid
                      ? false
                      : true
                  }
                  className={
                    formData.cxNameIsValid &&
                    formData.cxEmailIsValid &&
                    formData.cxPhoneNumberIsValid &&
                    formData.cxMessageIsValid
                      ? "mainBttn"
                      : "mainBttn invalidButton"
                  }
                  type="submit"
                >
                  send
                </button>
              </form>
            </div>
          </article>
          {canShowModal.modalShowing && (
            <div className="sentModal">
              <svg
                style={{
                  "--customColor": canShowModal.sentSuccess
                    ? "0, 112, 0"
                    : "112, 0, 0",
                }}
                onClick={() => {
                  setCanShowModal((prevData) => {
                    return { ...prevData, modalShowing: false };
                  });
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>

              {canShowModal.sentSuccess ? (
                <div>
                  <p>Message Sent Successfully</p>
                  <p>{canShowModal.statusMessage}</p>
                </div>
              ) : (
                <div>
                  <p>Message Not Sent</p>
                  <p>{canShowModal.statusMessage}</p>
                </div>
              )}
            </div>
          )}
          <article className="contactSocialCont">
            <Socials name="Twitter" heading="Check me out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </Socials>

            <Socials name="Facebook" heading="See Our Latest Posts">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </Socials>

            <Socials name="TikTok" heading="The Best Content">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
            </Socials>

            <Socials name="Youtube" heading="Watch Now">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </Socials>

            <Socials name="Instagram" heading="Take A Look">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Socials>
          </article>
        </section>

        <section id="testimonialStart" className="homeSection clientSec">
          <h1 className="BigHeader">My Clients</h1>
          <div className="clientSecCont">
            <div className="clientSecIndiv">
              <img src="https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg" />
              <p>Natalie Simmons</p>
              <p>
                I had the pleasure of working with Maxwell on a complex web
                development project, and I was consistently impressed with his
                technical skill and attention to detail. Maxwell was able to
                quickly understand the requirements of the project and develop
                high-quality code that met our needs. He was also a great
                collaborator, bringing valuable ideas and insights to the table.
                I highly recommend Maxwell as a fullstack web developer.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;

// <section className="hidden mainSection">

//   <h1>Hi I'm Max</h1>
//   <p>Here's what I can do</p>

// </section>

// <section className="hidden mainSection">
//   <h2>I've learnt many frameworks and libraries</h2>
//   <p>
//     I am known for my strong work ethic and willingness to learn, making
//     me an asset to any team. I have a track record of taking on new
//     challenges and learning quickly, which is essential in the
//     fast-paced world of web development. My excellent team work skills
//     also make me a valuable collaborator, able to work effectively with
//     others to achieve common goals.
//   </p>
// </section>
// <section className="hidden mainSection">
//   <p>
//     Overall, I believe that I have the skills and qualities needed to
//     make a positive impact as a fullstack web developer. My diverse
//     skill set, strong work ethic, and ability to work well with others
//     make me an excellent candidate for any web development position. I
//     am confident that my contribution to a team would be invaluable, and
//     that I would be able to help bring a wide range of projects to
//     fruition with my expertise and dedication.
//   </p>
// </section>
