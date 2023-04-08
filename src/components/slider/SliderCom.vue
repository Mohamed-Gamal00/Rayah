<template>
  <div class="container"></div>
  <!-- <section class="our-team-section">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-6 mt-4"
          v-for="member in members"
          :key="member"
        >
          <div class="our-team">
            <div class="pic" width="100" height="100">
              <img
                :src="member.image"
                width="100"
                height="100"
                class="rounded-circle"
              />
            </div>
            <div class="team-content">
              <h3 class="title">{{ member.name }}</h3>
              <span class="post">{{ member.job }}</span>
            </div>

            <ul class="social">
              <li v-if="member.linkedin">
                <a :href="member.linkedin" target="_blank"
                  ><FontAwesome :icon="['fab', 'linkedin-in']"
                /></a>
              </li>
              <li v-if="member.facebook">
                <a :href="member.facebook" target="_blank">
                  <FontAwesome :icon="['fab', 'facebook']" />
                </a>
              </li>
              <li v-if="member.twitter">
                <a :href="member.twitter" target="_blank"
                  ><FontAwesome :icon="['fab', 'twitter']" />
                </a>
              </li>
              <li v-if="member.instagram">
                <a :href="member.instagram" target="_blank"
                  ><FontAwesome :icon="['fab', 'instagram']" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
// import axios from "axios";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export default {
  name: "SliderCom",
  components: {},
  data() {
    return {
      members: [],
    };
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  // async mounted() {
  //   let result = await axios.get(`https://admin.growth-tech.co/api/team`);
  //   if (result.status == 200) {
  //     this.members = result.data.team;
  //   }
  // },
};
</script>

<!-- <style>
.our-team-section {
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
}
.our-team-section:before {
  position: absolute;
  top: -0;
  left: 0;
  content: " ";
  background-size: 100% 100px;
  width: 100%;
  height: 100px;
  float: left;
  z-index: 99;
}
.our-team {
  padding: 30px 0 40px;
  background: #f9f9f9;
  text-align: center;
  overflow: hidden;
  position: relative;
  border-bottom: 5px solid #ef4823;
}
.our-team:hover {
  border-bottom: 5px solid #ef4823;
}

.our-team .pic {
  display: inline-block;
  width: 130px;
  height: 130px;
  margin-bottom: 50px;
  z-index: 1;
  position: relative;
}
.our-team .pic img {
  width: 100%;
  height: 130px;
  border-radius: 100%;
}
.our-team .pic:before {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #ef4823;
  position: absolute;
  bottom: 135%;
  right: 0;
  left: 0;
  opacity: 1;
  transform: scale(3);
  transition: all 0.3s linear 0s;
}
.our-team:hover .pic:before {
  height: 100%;
  background: #d3583c;
}
.our-team .pic:after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #ef4823;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: all 0.3s linear 0s;
}
.our-team:hover .pic:after {
  background: #a73015;
}

.our-team .pic img {
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.9s ease 0s;
  box-shadow: 0 0 0 14px #f7f5ec;
  transform: scale(0.7);
  position: relative;
  z-index: 2;
}
.our-team:hover .pic img {
  box-shadow: 0 0 0 14px #f7f5ec;
  transform: scale(0.7);
}
.our-team .team-content {
  margin-bottom: 30px;
}
.our-team .title {
  font-size: 22px;
  font-weight: 700;
  color: #4e5052;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 5px;
}
.our-team .post {
  display: block;
  font-size: 15px;
  color: #4e5052;
  text-transform: capitalize;
}
.our-team .social {
  width: 100%;
  padding: 0;
  margin: 0;
  background: #ef4823;
  position: absolute;
  bottom: -100px;
  left: 0;
  transition: all 0.5s ease 0s;
}
.our-team:hover .social {
  bottom: 0;
}
.our-team .social li {
  display: inline-block;
}
.our-team .social li a {
  display: block;
  padding: 10px;
  font-size: 17px;
  color: #fff;
  transition: all 0.3s ease 0s;
}
.our-team .social li a:hover {
  color: #ef4823;
  background: #f7f5ec;
}
@media only screen and (max-width: 990px) {
  .our-team {
    margin-bottom: 30px;
  }
}
</style> -->
