interface ProposId {
    params:Promise <{videoId:string}>
}

const VideoId = async ({params}:ProposId) => {
    const {videoId} = await params
  return (
    <div>VideoId : {videoId}</div>
  )
}

export default VideoId