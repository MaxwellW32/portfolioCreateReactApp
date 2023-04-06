import React from "react";
import { useState } from "react";

function CollapsibleText({ buttonTxt, date, children }) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  return (
    <>
      <div
        className="collapsible"
        onClick={() => {
          setIsContentVisible(!isContentVisible);
        }}
      >
        <button
          style={{
            animation: isContentVisible
              ? "moveSide 2s infinite alternate ease"
              : "",
          }}
        >
          {buttonTxt}
          <span
            style={{
              color: isContentVisible
                ? "rgb(var(--secondColor))"
                : "rgb(var(--mainColor))",
            }}
          >
            {date}
          </span>
        </button>
        <svg
          style={{
            rotate: isContentVisible ? "180deg" : "0deg",
            fill: isContentVisible
              ? "rgb(var(--secondColor))"
              : "rgb(var(--blackSwitch))",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </div>

      {isContentVisible && <div className="jourWeek">{children}</div>}
    </>
  );
}

function Journal(props) {
  return (
    <div id="journalMainCont">
      <h1 className="BigHeader">Starting off</h1>
      <CollapsibleText
        date=""
        buttonTxt="RFP Project Received and Getting Started"
      >
        <p style={{ "--order": 1 }}>
          This week we received the Request for Proposal (RFP) for the ICT
          Application Project. As a team, we reviewed the document thoroughly
          and made sure that we understood the requirements and the scope of the
          project.
        </p>

        <p style={{ "--order": 2 }}>
          After our initial review, we began to brainstorm ideas for the project
          and assign roles to each team member. We decided to name our company
          "IT Systems Limited" and created a project plan that outlined the
          different phases of the project and the timelines for each phase.
        </p>

        <p style={{ "--order": 3 }}>
          We also started to research different virtualization environments that
          we could use for the project. After considering various options, we
          decided to use Virtual Box as our virtualization platform, since it
          would allow us to simulate a network environment that closely
          resembles the requirements outlined in the RFP (the Windows Server,
          Client Machine and File Server).
        </p>

        <p style={{ "--order": 4 }}>
          Finally, we installed Windows Server 2012 and Windows 10 on Yuri's
          machine (since he had the most powerful one) to start things off.
        </p>

        <p style={{ "--order": 5 }}>
          Overall, it was a productive week, and we feel confident that we are
          on the right track to deliver a high-quality solution that meets the
          requirements of the RFP. We are excited to dive deeper into the
          project and see what the coming weeks have in store for us.
        </p>
      </CollapsibleText>

      <CollapsibleText date="11/08/22" buttonTxt="Installing virtual box - ">
        <p style={{ "--order": 1 }}>
          today was the first day of my project and I started by assiting my
          Project members Yuri and Bruce to install VirtualBox on Yuri's
          computer. We decided to install Windows Server 2012 and Windows 10 as
          the client computer. It was a long process, but we managed to complete
          the installations successfully.
        </p>
      </CollapsibleText>

      <CollapsibleText
        date="02/12/23"
        buttonTxt="Install DNS, DHCP and domain controller - "
      >
        <p style={{ "--order": 1 }}>
          Before we could install the DNS server we had to set a static IP
          address for the server, I watched a ton of videos on IP addresses and
          Subnetting and I'm pretty proud of my understanding now, it helped me
          be able to contribute more when we setting things up
        </p>
        <p style={{ "--order": 2 }}>
          We focused on installing DNS, DHCP, and the domain controller. Using
          the Add roles and features wizard to do this was pretty easy. We got
          everything added and created a new forest for our Domain Controller.
        </p>
      </CollapsibleText>

      <CollapsibleText
        date="02/22/23"
        buttonTxt="Linux file server and windows web server - "
      >
        <p style={{ "--order": 1 }}>
          This week was all about setting up the Linux file server and the
          Windows web server. We chose to install Ubuntu for the Linux file
          server and it took some time to get everything working correctly. We
          had to watch a ton of turorials as it wasn't working the first time we
          even tried to boot up the VM. I even went so far as to delete all my
          files on my laptop and downlaod the virtual setup to try to get things
          working. But we were able to successfully troubleshoot not only the vm
          loading, but getting the file server working with Samba. We learned a
          lot the command line interface through linux. As I had downloaded the
          GUI on my end, but on Yuris machine we were able to successfully get
          all the updated command working. Add the correct users and make the
          shared folders accessible from the IP address of the server.
        </p>
        <p style={{ "--order": 2 }}>
          The Windows web server was much easier to install and configure, and
          we were to get it up and running in a short amount of time. We started
          with the Intranet website we needed to get loaded. We follwed the
          instructions from youtube tutorials and google, but when we could'nt
          get it to work. I was our colleague Bruce that decided we should
          delete our settings and leave certain checkboxes on default, and BOOM!
          We got it to work.
        </p>

        <p style={{ "--order": 3 }}>
          Our Internet server was a lot more Complex. We even installed a second
          Windows Server 2012 VM to have it on a different network. I thought
          the issue was that Yuri needed to allow port forwarding on his actual
          home router, cause we already confirmed that we could ping the ip
          address of the server correctly and get a response even from my home
          phone to his network. However when troubleshooting with sir we were
          able to get things working. This was a huge success for us as we had
          been going back and forth for 2 meetings. Really felt like we all
          learned a lot
        </p>
      </CollapsibleText>

      <CollapsibleText
        date="03/05/23"
        buttonTxt="Second network adapter & Remote access - "
      >
        <p style={{ "--order": 1 }}>
          Today was all about installing remote access on the server. This task
          was relatively easy to complete, and we were able to set up remote
          access without any issues. It has been my job to screenshot each step
          for our RFP document, to make sure everything is nice and organized.
          So sometimes if things went wrong it was difficult to know where the
          troubleshooting ended and the professional screenshot steps could
          begin. This installation was pretty simple considering we only had to
          use the add roles and features wizard.
        </p>
      </CollapsibleText>

      <CollapsibleText date="03/12/23" buttonTxt="Email server - ">
        <p style={{ "--order": 1 }}>
          This was one of our most complicated setups, in the end not even sir
          could figure out what was wrong, so we ot a pass to skip this. However
          we did spend some classes installing all the pre-requisits. Sir even
          sat down with us and ensured we had the right installation files
          directly from micrsosoft's website. On our own we even went to repeat
          this setup process 3 times, each time the installation would get a far
          way, then crash with a different error message. After a lot of time
          searching up the resolutions from these messages we progressed little
          by little only to run into another message. However as a group we
          fully understand the mail exchange process.
        </p>
      </CollapsibleText>

      <CollapsibleText date="" buttonTxt="Overall">
        <p id="overallText" style={{ "--order": 1 }}>
          Overall, I feel like I've made a lot of progress on this project. I've
          learned a lot about different operating systems and how to install and
          configure servers. This project has forwarded my understanding of
          vaious networking topics and I am pleased with how well we worked
          together as a group. I'm excited to see what else I can learn in the
          future and build on this knowledge.
        </p>
      </CollapsibleText>

      <h1 id="JournalFAQ" className="BigHeader">
        FaQ
      </h1>
      <CollapsibleText date="11/08/22 - 03/05/23" buttonTxt="What worked - ">
        <p style={{ "--order": 1 }}>
          Setting up the static IP address, ended up learning a lot about
          networking as I watched multiple youtube videos to grasp the topic.
        </p>
        <p style={{ "--order": 2 }}>
          Installing the Ubuntu Linux file server. Even though the GUI version
          exists we ended up using a CLI runtime. We learned a lot working with
          Samba and configuring shared folders with authentication.
        </p>
        <p style={{ "--order": 3 }}>
          The intranet and internet web servers. We were able to get them up and
          running, and learned a lot from the troubleshooting that was required.
        </p>
        <p style={{ "--order": 4 }}>
          We were able to successfully install remote access on our Windows
          Server 2012, this was relatively easy to do.
        </p>
      </CollapsibleText>

      <CollapsibleText date="03/05/23" buttonTxt="What didn't work - ">
        <p style={{ "--order": 1 }}>
          The email Server - It was over the course of 2-3 weeks where we even
          troubleshooted with sir twice. We kept running into different error
          codes, and even though we took the time to research the different
          codes. By the time we ran again, after about 40 minutes of success it
          would crash again with a different code. So sir said we could skip it
          for know.
        </p>
      </CollapsibleText>

      <CollapsibleText
        date="11/08/22"
        buttonTxt="What we did to troubleshoot - "
      >
        <p style={{ "--order": 1 }}>
          Over the entire course of the project, youtube was a big help in use
          not only understanding the topic mterial of what we were trying to do,
          but also getting access to tutorial videos.{" "}
        </p>

        <p style={{ "--order": 2 }}>
          We also extensively used Google, Stack overflow and Chat-Gpt when we
          ran into error codes
        </p>
      </CollapsibleText>
    </div>
  );
}

export default Journal;
