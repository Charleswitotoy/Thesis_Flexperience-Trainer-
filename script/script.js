function addnewPlan(){
    var newPlan_popup = document.getElementById('add_new_template_pop_up')
    newPlan_popup.classList.toggle('active')
}
function cancel_addnewPlan(){
    var newPlan_popup = document.getElementById('add_new_template_pop_up')
    newPlan_popup.classList.toggle('active')
}

function createWorkout(){
    var createWorkout_popup = document.getElementById('create_new_workout_pop_up')
    createWorkout_popup.classList.toggle('active')
}
function cancel_createWorkout(){
    var createWorkout_popup = document.getElementById('create_new_workout_pop_up')
    createWorkout_popup.classList.toggle('active')
}
function cancel_viewWorkout(){
    var viewWorkout_popup = document.getElementById('view_workout_popup')
    viewWorkout_popup.classList.toggle('active')
}


function viewWorkout(planType){
    alert(planType)

    if (planType == 'Bulking Workout Plan'){
        const form = document.getElementById('view_workout_popup');
        form.innerHTML = `
        <div> 
            <h1>${planType} Details</h1>
        </div>
            <table>
               <tr>
                    <th>Exercise Name</th>
                    <th>Repititions</th>
                    <th>Sets</th>
                    <th>Target Muscle Group</th>
                    <th>Week No</th>
                    <th>Day No</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
            </table>
        <div>
            <input class="button" type="button" value="CLOSE" onclick="cancel_viewWorkout()">'
        </div>
        `
    }else if(planType == 'Strength Training Workout Plan'){
        const form = document.getElementById('view_workout_popup');
        form.innerHTML = `
        <div> 
            <h1>${planType} Details</h1>
        </div>
            <table>
               <tr>
                    <th>Exercise Name</th>
                    <th>Repititions</th>
                    <th>Sets</th>
                    <th>Target Muscle Group</th>
                    <th>Week No</th>
                    <th>Day No</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
            </table>
        <div>
            <input class="button" type="button" value="CLOSE" onclick="cancel_viewWorkout()">'
        </div>
        `
    }else if(planType == 'Body Building Workout Plan'){
        const form = document.getElementById('view_workout_popup');
        form.innerHTML = `
        <div> 
            <h1>${planType} Details</h1>
        </div>
            <table>
               <tr>
                    <th>Exercise Name</th>
                    <th>Repititions</th>
                    <th>Sets</th>
                    <th>Target Muscle Group</th>
                    <th>Week No</th>
                    <th>Day No</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
            </table>
        <div>
            <input class="button" type="button" value="CLOSE" onclick="cancel_viewWorkout()">'
        </div>
        `
    }else if(planType == 'Shredding Workout Plan'){
        const form = document.getElementById('view_workout_popup');
        form.innerHTML = `
        <div> 
            <h1>${planType} Details</h1>
        </div>
            <table>
               <tr>
                    <th>Exercise Name</th>
                    <th>Repititions</th>
                    <th>Sets</th>
                    <th>Target Muscle Group</th>
                    <th>Week No</th>
                    <th>Day No</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
            </table>
        <div>
            <input class="button" type="button" value="CLOSE" onclick="cancel_viewWorkout()">'
        </div>
        `
    }
    var viewWorkout_popup = document.getElementById('view_workout_popup')
    viewWorkout_popup.classList.toggle('active')
}