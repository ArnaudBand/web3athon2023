import Link from "next/link";
import { useEffect } from "react";

const Collection = () => {
  useEffect(() => {
    const collection = document.querySelector(".fn_cs_collection");
    var items = collection.querySelectorAll(".item");
    var itemsLength = items.length;
    setInterval(function () {
      var numberOne = Math.floor(Math.random() * itemsLength);
      var numberTwo = Math.floor(Math.random() * itemsLength);

      while (numberTwo === numberOne) {
        numberTwo = Math.floor(Math.random() * itemsLength);
      }
      var firstDiv = items[numberOne];
      var secondDiv = items[numberTwo];
      var firstImage = firstDiv.querySelector("input").value;
      var secondImage = secondDiv.querySelector("input").value;
      firstDiv.classList.add("ready");
      secondDiv.classList.add("ready");
      setTimeout(function () {

        firstDiv.classList.remove("ready");
        secondDiv.classList.remove("ready");
      }, 500);
    }, 2000);
  }, []);

  return (
    <section id="collection">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Our Collection"
          data-align="center"
        >
          Our Collection
        </h3>
        <div className="fn_cs_collection">
          <div className="collection_top">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/1.jpg"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/1.jpg" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/2.jpg"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/2.jpg" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/3.jpg"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/3.jpg" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/4.jpg"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/4.jpg" />
            </div>
          </div>
          <div className="collection_bottom">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/5.jpg"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/5.jpg" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/6.jpg"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/6.jpg" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/7.jpg"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/7.jpg" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/8.jpg"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/8.jpg" />
            </div>
          </div>
        </div>
        <div className="fn_cs_desc">
          <p>
            "S3sh" provides an exciting and immersive gaming experience that educates players about ancient African principles and history. By earning rewards and collecting NFTs with metadata, players can delve into hidden historical information and gain access to real-life experiences, comps, and tours. With its availability on platforms like Facebook, web, and the groundbreaking Solana Saga, "S3sh" offers a unique opportunity to explore African culture, enhance knowledge, and enjoy the thrill of gameplay all in one engaging package.
          </p>
          <Link href="/collection">
            <a className="metaportal_fn_button">
              <span>See All Collection</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Collection;
