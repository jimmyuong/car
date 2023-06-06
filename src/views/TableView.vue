<template>
  <div class="home">
    <HeaderView></HeaderView>
    <main class="main">
      <div class="mainBox">


        <div class="section">
          <section>
            <div class="buttonBar">
              <button type="submit" @mouseover="playSound" class="submit">Submit</button>
              <button type="submit" @mouseover="playSound" class="del">Delate</button>
              <button type="reset" @mouseover="playSound">Reset</button>
              <button type="reset" @mouseover="playSound">Check</button>
            </div>
<div class="tableButtonBar">
            <table >
              <thead>
                <tr>
                  <th class="checkbox"><input type="checkbox"></th>
                  <th>ID</th>
                  <th>vehicleName</th>
                  <th>vehicleType</th>
                  <th>vehicleCode</th>
                  <th>batteryCapacity</th>
                  <th>vehicleSpecs</th>
                  <th>vehicleSeats</th>
                  <th>maxSpeed</th>
                  <th>fuelConsumption</th>
                  <th>fuelTankCapacity</th>
                  <th>vehicleWeight</th>
                  <th>payloadCapacity</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in datas" :key="index">
                <td class="checkbox"><input type="checkbox"></td>
                <td>{{ item.id }}</td>
                <td>{{ item.vehicleName }}</td>
                <td>{{ item.vehicleType }}</td>
                <td>{{ item.vehicleCode }}</td>
                <td>{{ item.batteryCapacity }}</td>
                <td>{{ item.vehicleSpecs }}</td>
                <td>{{ item.vehicleSeats }}</td>
                <td>{{ item.maxSpeed }}</td>
                <td>{{ item.fuelConsumption }}</td>
                <td>{{ item.fuelTankCapacity }}</td>
                <td>{{ item.vehicleWeight }}</td>
                <td>{{ item.payloadCapacity }}</td>
                </tr>
                <!--tr>
                  <td><input type="checkbox"></td>
                  <td><input type="text" value="1212"></td>
                  <td><input type="text" value="1212"></td>
                  <td><input type="text" value="1212"></td>
                  <td><input type="text" value="1212"></td>
                  <td><input type="text" value="1212"></td>
                  <td><input type="text" value="1212"></td>
                  <td>Edit | Delate</td>
                </tr>
                <tr>
                  <td><input type="checkbox"></td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>Edit | Delate</td>
                </tr>
                <tr>
                  <td><input type="checkbox"></td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>Edit | Delate</td>
                </tr>
                <tr>
                  <td><input type="checkbox"></td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>Edit | Delate</td>
                </tr>
                <tr>
                  <td><input type="checkbox"></td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>1212</td>
                  <td>Edit | Delate</td>
                </tr-->
              </tbody>
            </table>
            </div>  
          </section>
          <!--section>
      <table>
            <tbody>
                <tr>
                  <th>1212</th>
                </tr>
                <tr>
                  <td>1212</td>
                </tr>
                <tr>
                  <td>1212</td>
                </tr>
                <tr>
                  <td>1212</td>
                </tr>
                <tr>
                  <td>1212</td>
                </tr>
            </tbody>
              </table>
    </section-->
        </div>
      </div>
    </main>
    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from './layouts/HeaderView.vue';
import FooterView from './layouts/FooterView.vue';
import da from '@/assets/sound/da.mp3'
import json from '@/assets/json/data-en.json'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    HeaderView,
    FooterView
  },
  data() {
    return {
      datas: []
    }
  },
  mounted() {
    console.log(json)
    this.datas = json
  },
  methods: {
    playSound() {
      // 创建Audio对象并加载音效文件
      const audio = new Audio(da)
      console.log("play")
      // 播放音效文件
      audio.play()
    }
  }
}
</script>

<style lang="scss">
.section {
  padding: 1rem;
  display: flex;
  flex-direction: row;

  section {
    margin: 3px;
    flex: 1;

    table {
      border: 1px solid transparent;
      animation: all .1s ease-in-out;

    //  &:hover {
    //    border: 1px solid #006B6F;
    //  }
    }
  }
}</style>
