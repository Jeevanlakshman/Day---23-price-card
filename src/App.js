import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div class ="cointainer">
        <div class ="row">
          <div class ="col-lg-12-col-md-6-col-sm-3">
          <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
          <h2 class="card-price text-center">$0<span class="period">/month</span></h2>
     
      <Details
      
     
      user="✔ Single user"
      storage ="✔ 5GB storage"
      pacakage ="  ✔Unlimited Public Projects"
      community ="✔community Access"
      projects ="X unlimited private projects"
      support ="X Dedicated phone Support"
      domain ="✖ Free Subdomanin"
      supports ="✖ Monthly status supports"
      />

<button onclick ="clicking(this)"className="Button">Button</button>
</div>
</div>
</div>
<div class ="cointainer">
        <div class ="row">
          <div class ="col-lg-12-col-md-6-col-sm-3">
          <h5 class="card-title text-muted text-uppercase text-center">plus</h5>
          <h2 class="card-price text-center">$9<span class="period">/month</span></h2>

      <Details
     
      user="✔ 5 users"
      storage ="✔ 5GB storage"
      pacakage ="✔ Unlimited Public Projects"
      community ="✔ community Access"
      projects ="✔ unlimited private projects"
      support ="✔ Dedicated phone Support"
      domain ="✔ Free Subdomanin"
      supports ="✖ Monthly status supports"
      />
        <button onclick ="clicking(this)"className="Button">Button</button>
</div>
</div>
</div>
<div class ="cointainer">
        <div class ="row">
          <div class ="col-lg-12-col-md-6-col-sm-3">
          <h5 class="card-title text-muted text-uppercase text-center">pro</h5>
          <h2 class="card-price text-center">$49<span class="period">/month</span></h2>


<Details
      
      user       ="✔ Unlimited users"
      storage    ="✔ 5GB storage"
      pacakage   ="✔ Unlimited Public Projects"
      community  ="✔ community Access"
      projects   ="✔ unlimited private projects"
      support    ="✔ Dedicated phone Support"
      domain     ="✔ Free Subdomanin"
      supports   ="✔ Monthly status supports"
      />
      <button onclick ="clicking(this)"className="Button">Button</button>
      
    </div>
    </div>
</div>
</div>
  );
}
function Details(props){
  return(
    <div className="card">
      <p>{props.user}</p>
      <p>{props.storage}</p>
      <p>{props.pacakage}</p>
      <p>{props.community}</p>
      <p>{props.projects}</p>
      <p>{props.support}</p>
      <p>{props.domain}</p>
      <p>{props.supports}</p>
    
 
    </div>
  );
  }