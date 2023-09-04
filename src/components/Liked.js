export function Liked({ data }) {
  let likes = data.filter((liked) => liked.like === true);
  return (
    <>
      <div className="likedWindow">
        {likes.length > 0 ? (
          <div className="r-cards">
            {likes.map((elem) => {
              return (
                <div className="r-card" key={elem.id}>
                  <div className="disc-like">
                    <div className="disc">
                      <p>{elem.disc}% off</p>
                    </div>
                  </div>
                  <div className="product-img">
                    <img src={elem.img} alt="" />
                  </div>
                  <div className="r-title">
                    <div className="desc">
                      <p>{elem.desc}</p>
                    </div>
                    <div className="title">
                      <h3>{elem.title}</h3>
                    </div>
                    <div className="price">
                      <p>
                        ${parseInt(elem.price - (elem.disc / 100) * elem.price)}
                        <del>${elem.price}</del>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h1>Empty</h1>
        )}
      </div>
    </>
  );
}
