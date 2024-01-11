/* eslint-disable react/prop-types */

function Dashboard(props) {
  const {task} = props
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-bold">{new Date().toDateString()}</h2>
      <p className="text-lg font-semibold">{task} Tasks</p>
    </div>
  )
}

export default Dashboard