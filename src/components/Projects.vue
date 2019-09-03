<template>
    <div>
      <h2>Projects</h2>
      <br>
      <b-card-group deck>
        <b-card title="Bank Rewardz System">
          <b-card-text>
            A Portal where customers of one of the largest private sector banks can redeem their reward points for services such as flight, hotel, movie, recharge bookings. <br> <b> Team Size - 4</b>
          </b-card-text>
        </b-card>

        <b-card title="Flight booking API" >
          <b-card-text>
            WebApi to book flight with reward points by bank customers.  <br><b> Team Size - 4</b>
          </b-card-text>
        </b-card>

        <b-card title="Movie Booking API" >
          <b-card-text>
            WebApi to book Movie with reward points by bank customers.  <br><b> Team Size - 4</b>
          </b-card-text>
        </b-card>
      </b-card-group>
      <br>
      <b-card-group deck>
        <b-card title="Recharge API" >
          <b-card-text>
            WebApi to Recharge mobile plans as well as do bill payment with reward points by bank customers.  <br><b> Team Size - 4</b>
          </b-card-text>
        </b-card>

        <b-card title="Payment API" >
          <b-card-text>
            To collect payment from customer both using reward points as well as via HDFC payment gateway. <br><b> Team Size - 4</b>
          </b-card-text>
        </b-card>

        <b-card title="Matador">
          <b-card-text>
            A informational site for luxurious co-working space. <br><b> Team Size - 1</b>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          title: '',
          description: '',
          img_url: ''
        },
        {
          title: '',
          description: '',
          img_url: ''
        },
        {
          title: '',
          description: '',
          img_url: ''
        },
        {
          title: '',
          description: '',
          img_url: ''
        }
      ]
    }
  }
}
</script>
