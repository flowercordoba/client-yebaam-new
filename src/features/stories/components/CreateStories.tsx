import storycard5 from 'src/assets/images/resources/story-card5.jpg';
      
const CreateStories = () => {
  return (
    <div>
        <img src={storycard5}alt="" />
            <div className="users-dp">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <a className="add-new-stry" href="#" title=""><i className="icofont-plus"></i></a>
            <span>Crear Historia</span>
    </div>
  )
}

export default CreateStories