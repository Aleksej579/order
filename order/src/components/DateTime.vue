<template>
  <div id="datetime">
    <div class="day">
      {{ dat()[0] }}
    </div>
    <div>
      {{ dat()[1] }}
      {{ dat()[2] }}
      {{ dat()[3] }}
      <i class="bx bx-time bx-flip-horizontal" style="color: #8bc34a"></i>
      {{ time() }}
      <span id="time">00:00</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Datetime",
  props: {},
  data() {
    return {
      date: new Date(),
      dat() {
        let dat = new Date()
          .toLocaleString("ru", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
          .replace(",", "")
          .split(" ");
        return dat;
      },
      time: () => {
        setInterval(function () {
          let date = new Date(),
            h = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
          h = h < 10 ? "0" + h : h;
          m = m < 10 ? "0" + m : m;
          s = s < 10 ? "0" + s : s;
          document.getElementById("time").innerHTML = h + ":" + m;
        }, 1000);
      },
    };
  },
};
</script>

<style lang="sass">
#datetime
  width: max-content
  height: 100%
  display: flex
  flex-direction: column
  align-items: baseline
  justify-content: center
  float: right
  margin-right: 80px
  .day
    text-transform: capitalize
  i
    margin-left: 10px
</style>
