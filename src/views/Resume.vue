<template>
  <div>
    <b-container>
      <div class="introduction">
        <b-row class="no-gutters" >
          <b-col cols="2">
            <img src="../assets/images/rishi-shah.jpg" alt="rishi shah" class="main-image">
          </b-col>
          <b-col cols="7">
            <div class="name-title">
              <h2>Rishi Shah</h2>
              <h5>Senior Software Engineer</h5>
            </div>
          </b-col>
          <b-col cols="3">
            <div class="header-contact">
              <img src="../assets/icon/mail.svg" alt="" class="header-icon"> <a href="mailto:rishishah120@gmail.com">rishishah120@gmail.com</a>
              <br>
              <img src="../assets/icon/github.svg" alt="" class="header-icon"><a href="https://github.com/rishi-shah">https://github.com/rishi-shah</a>
              <br>
              <img src="../assets/icon/linkedin.svg" alt="" class="header-icon"><a href="https://in.linkedin.com/in/rishi-shah-87110a123">https://in.linkedin.com/in/rishi-shah-87110a123</a>
              <br>
              <img src="../assets/icon/web.svg" alt="" class="header-icon"><a href="https://www.rishishah.dev">https://www.rishishah.dev</a>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="profile-summary">
        <h3 class="heading">
          Summary
        </h3>
        <ul class="summary-data">
          <li class="summary-detail">
            Senior Software Engineer,with experience in designing and developing n-tier web applications and client / server applications using Microsoft Technologies like .NET and Web Technologies like ASP.NET, ASP.NET MVC, Vue, Angular for enterprise applications
          </li>
          <li class="summary-detail">
            Clear understanding of OOD/OOP concepts & fundamentals, SOA/Micro Service, and software system development full life cycle
          </li>
          <li class="summary-detail">
            Senior Software Engineer,with experience in designing and developing n-tier web applications and client / server applications using Microsoft Technologies like .NET and Web Technologies like ASP.NET, ASP.NET MVC, Vue, Angular for enterprise applications
          </li>
          <li class="summary-detail">
            Successfully designed and developed loylty payment module to meet specific business requirements
          </li>
          <li class="summary-detail">
            Implemented SOA based projects using of Microsoft technologies like WCF
          </li>
          <li class="summary-detail">
            Implemented REST based services using Web API
          </li>
          <li class="summary-detail">
            Experience in Client-sideWeb technologies like JavaScript, JQuery, CSS, and HTML
          </li>
          <li class="summary-detail">
            A thinker with communication skills who can work individually as well as with team effectively
          </li>
        </ul>
      </div>
      <b-row>
        <b-col cols="8">
          <div class="experience">
            <h3 class="heading">
              Work Experience
            </h3>
            <div class="workExperience" v-for="work in workExperience" :key="work.companyName">
              <div class="company-name">
                <h5>{{work.companyName}}</h5>
              </div>
              <div class="work-title-duration">
                <p>{{work.workTitle}} {{work.from}}-{{work.to}}</p>
              </div>
              <div class="summary">
                <b>Summary</b>
                <ul class="summary-data">
                  <li v-for="detail in work.summary" :key="detail" class="summary-detail work-summary-detail">
                    {{detail}}
                  </li>
                </ul>
                <b>Highlights</b>
                <ul class="summary-data">
                  <li v-for="detail in work.highlight" :key="detail" class="summary-detail work-summary-detail">
                    {{detail}}
                  </li>
                </ul>
                <b>Technologies User</b>
                <br>
                <b-badge class="badges" v-for="technology in work.technologies" :key="technology">
                  {{technology}}
                </b-badge>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="key-skills">
            <h3 class="heading">
              Frontend
            </h3>
            <div  v-for="skill in frontendSkills" :key="skill.name" class="frontendskills">
              <div class="skill-name">{{skill.name}}</div>
              <div class="skill-strength">
                <b-progress :value="skill.value" :max="skill.max" :variant="skill.variant" class="progress-skill"></b-progress>
              </div>
            </div>
          </div>
          <br>
          <div class="key-skills">
            <h3 class="heading">
              Backend
            </h3>
            <div  v-for="skill in backendSkills" :key="skill.name" class="backendskills">
              <div class="skill-name">{{skill.name}}</div>
              <div class="skill-strength">
                <b-progress :value="skill.value" :max="skill.max" :variant="skill.variant" class="progress-skill"></b-progress>
              </div>
            </div>
          </div>
          <br>
          <div class="key-skills">
            <h3 class="heading">
              Other
            </h3>
            <div  v-for="skill in otherSkills" :key="skill.name" class="otherskills">
              <div class="skill-name">{{skill.name}}</div>
              <div class="skill-strength">
                <b-progress :value="skill.value" :max="skill.max" :variant="skill.variant" class="progress-skill"></b-progress>
              </div>
            </div>
          </div>
          <br>
          <div class="education">
            <h3 class="heading">
              Education
            </h3>
            <div v-for="degree in education" :key="degree.name" class="education-body">
              <b>{{degree.name}}</b>
              <br>
              {{degree.university}} - {{degree.year}}
            </div>
          </div>
          <br>
          <div class="languages">
            <h3 class="heading">
              Languages
            </h3>
            <div class="language-badge">
              <b-badge class="badges" v-for="language in languages" :key="language"> {{language}}</b-badge>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      frontendSkills: [
        {
          variant: 'dark',
          name: 'html',
          value: 8,
          max: 10
        },
        {
          variant: 'dark',
          name: 'css',
          value: 8,
          max: 10
        },
        {
          variant: 'dark',
          name: 'javascript',
          value: 9,
          max: 10
        },
        {
          variant: 'dark',
          name: 'Jquery',
          value: 7,
          max: 10
        },
        {
          variant: 'dark',
          name: 'Angular/Vue',
          value: 6,
          max: 10
        }
      ],
      backendSkills: [
        {
          variant: 'dark',
          name: '.net Core',
          value: 8,
          max: 10
        },
        {
          variant: 'dark',
          name: 'C#',
          value: 9,
          max: 10
        },
        {
          variant: 'dark',
          name: 'SQL',
          value: 8,
          max: 10
        },
        {
          variant: 'dark',
          name: 'Node',
          value: 6,
          max: 10
        },
        {
          variant: 'dark',
          name: 'API',
          value: 9,
          max: 10
        }
      ],
      otherSkills: [
        {
          variant: 'dark',
          name: 'Docker',
          value: 4,
          max: 10
        },
        {
          variant: 'dark',
          name: 'Code Review',
          value: 8,
          max: 10
        },
        {
          variant: 'dark',
          name: 'TFS/Git',
          value: 7,
          max: 10
        },
        {
          variant: 'dark',
          name: 'JIRA',
          value: 8,
          max: 10
        },
        {
          variant: 'dark',
          name: 'Photoshop',
          value: 6,
          max: 10
        }
      ],
      workExperience: [
        {
          companyName: 'Xoriant solution pvt ltd.',
          workTitle: 'Sr. software engg.',
          from: 'Apr 2019',
          to: 'Present',
          summary: ['Designing, Developing and maintaining various module api, for consumption both by clients as well as mobile team.',
            'Designing & Developing UI/UX for web and integrating the same with the WebApi.',
            'Working closely with clients on various requirements.',
            'Optimizing, Automating or improving existing application/services on new instances'],
          highlight: ['Working closely with clients on various requirements.',
            'Converting business requirements into solutions.',
            'Designing & Developing UI/UX.'],
          technologies: ['.net Core', 'WebApi', 'Sql', 'Javascript', 'node', 'vue']
        },
        {
          companyName: 'Loylty Rewardz pvt ltd.',
          workTitle: 'Software Engg.',
          from: 'Apr 2014',
          to: 'Apr 2019',
          summary: ['Designing, Developing and maintaining various module api, i.e Flight, Hotel, Movie, Recharge, Payment for consumption and transactional bookings.',
            'Developing and maintaining various bank loylty program website, i.e HDFC, Yes, SBI for bank customer to redeem points and avail services/products.',
            'Executing and supporting Server deployments and server migrations activity with release management team.',
            'Coordinating with: Support teams to identify and troubleshoot operational and performance related issues. Application support team regarding high level problem',
            'Optimizing, Automating or improving existing application/services on new instances',
            'Following procedures, change management best practices, ensuring maintenance of disaster recovery stance'],
          highlight: ['Common payment gateway integration with HDFC.',
            'WCF/Web API for Flight, Hotel, Movie, Recharge and Payment API/Module.',
            'Development and maintenance of Bank Loylty program websites for HDFC, SBI and Yes-CC.',
            'Development/Revamp of various existing system with given parameters.',
            'Development and automation of various internal process and backend bookings.'],
          technologies: ['.net', 'mvc', 'c#', 'javascript', 'jquery', 'wcf', 'webapi', 'sql', 'iis']
        }
      ],
      education: [
        {
          name: 'B.sc(IT)',
          university: 'Mumbai University',
          year: '2014'
        },
        {
          name: 'GNIIT(Software Engg)',
          university: 'GNIIT - Borivali',
          year: '2015'
        }
      ],
      languages: ['English', 'Hindi', 'Marathi', 'Gujarati']
    }
  }
}
</script>

<style scoped>
.main-image {
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
}

.introduction {
  margin-top: 30px;
}

.name-title {
  text-align: left;
  margin-top: 10px;
}

.header-contact {
  text-align: left;
  font-size: 15px;
  margin-top: 10px;
}
.header-icon {
  width: 15px;
  height: 15px;
}

.header-contact a {
  color: black;
  margin-left: 3px;
}

.heading {
  margin: 5px 0;
  border-bottom: 2px solid black;
}

.summary-data{
  text-align: left;
  margin-top: 10px;
}

.summary-detail {
  margin-left: 20px;
}

.progress-skill {
  height: 8px;
}

.skill-name {
  text-align: left;
}

.company-name {
  text-align: left;
  margin-left: 10px;
  margin-top: 5px;
  border-bottom: 1px dotted darkgray;
}

.work-title-duration {
  text-align: left;
  margin-left: 10px;
  font-size:12px;
}

.work-summary-detail {
  font-size: 15px;
}

.badges {
  margin: 5px 5px;
}

.education-body {
  text-align:left;
  margin-top: 10px;
}
</style>
