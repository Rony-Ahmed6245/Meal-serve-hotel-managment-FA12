
import { useEffect, useState } from "react";
import { SlBadge } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { CheckCircle } from "phosphor-react";
import { Card } from "keep-react";
import { Label, TextInput } from "keep-react";

const Payment = () => {


  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://final-assignment-12s.vercel.app/v1/paymentCard"); // Adjust the path based on your project structure
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const filterItem = data.find((item) => item._id == id);
  // console.log(filterItem);
  const { keyf1, keyf2, keyf3, keyf4, keyf5, keyf6, price, badge
  } = filterItem || {}

  return (
    <div className="mt-32 max-w-7xl mx-auto px-4">
      {/* Display payment details or any other content */}

      <div className="md:flex justify-center items-start gap-20">

        <div className="flex-grow border rounded ">

          <div className="p-8 bg-base-200 rounded space-y-2 mb-20 ">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Subtotal package(1)</h1>
              <h1 className="text-xl font-bold">${price}</h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Discount</h1>
              <h1 className="text-xl font-bold">NO Discount</h1>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Total</h1>
              <h1 className="text-xl font-bold">${price}</h1>
            </div>
          </div>
          <div className=" md:m-20 m-4 ">
            <div className="md:flex gap-10">

              <div>
                <Label value="Card holder full name" className="input_label" />
                <TextInput
                  id="#id-17"
                  placeholder="Enter your full name"
                  color="gray"
                  className="w-full"
                />
              </div>
              <div>
                <Label value="Card Number" className="input_label" />
                <TextInput
                  id="#id-17"
                  placeholder="0000 0000 0000 0000"
                  color="gray"
                  className="w-full"
                />
              </div>


            </div>
            <Label value="Expiry Date" className="input_label" />
            <TextInput
              id="#id-17"
              placeholder="1/23"
              color="gray"
              className="w-full input_field"
            />
            <Label value="CVV" className="input_label" />
            <TextInput
              id="#id-17"
              placeholder="CVV"
              color="gray"
              className="w-full input_field"
            />
            <div className="text-center mt-5">
              <button className="btn btn-neutral">Pay</button>
            </div>
          </div>



          <div className="my-10 flex justify-center items-center ">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="heading_8264">MASTERCARD</p>
                  <svg className="logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
                    <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path><path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path><path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
                  </svg>
                  <svg version="1.1" className="chip" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 50 50" xml: space="preserve">  <image id="image0" width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
              fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
              ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
              e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
              ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
              u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
              fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
              lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
              tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
              g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
              /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
              orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
              GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
              OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
              I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
              lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
              JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
              qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
              1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
              BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
              amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
              S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
              cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
              MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
              LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="></image>
                  </svg>
                  <svg version="1.1" className="contactless" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50" xml: space="preserve">  <image id="image0" width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
              cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQf
              lGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/F
              fPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xN
              GQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49it
              VoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJk
              HpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15z
              bkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6g
              DJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJ
              qSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKB
              sSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz
              Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uX
              XSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUi
              cUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaI
              nKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBK
              xDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDIt
              MTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5
              OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw
              MDowMIXeN6gAAAAASUVORK5CYII="></image>
                  </svg>
                  <p className="number">9759 2484 5269 6576</p>
                  <p className="valid_thru">VALID THRU</p>
                  <p className="date_8264">1 2 / 2 4</p>
                  <p className="name">BRUCE WAYNE</p>
                </div>
                <div className="flip-card-back">
                  <div className="strip"></div>
                  <div className="mstrip"></div>
                  <div className="sstrip">
                    <p className="code">***</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-2 ">

          <Card className="max-w-xs p-6  bg-base-200 hover:shadow-md transition-all">
            <Card.Container>
              <Card.Container className="h-[60px] w-[60px]  bg-primary-25 flex items-center justify-center rounded-full">

              </Card.Container>
              <Card.Container>
                <Card.Title className=" flex mb-5  justify-start gap-3  items-center font-medium text-primary-600">
                  <h1 className="text-2xl font-bold"> Choose your Package</h1>
                </Card.Title>
                <Card.Title className=" flex justify-start gap-3 text-3xl items-center font-medium text-primary-500">
                  <SlBadge />{badge}
                </Card.Title>
                <Card.Title className="flex items-center my-3">
                  <span className="text-heading-4 font-bold text-metal-800">${price}</span>
                  <span className="ml-1 text-body-4 font-medium text-metal-400">
                    / mth
                  </span>
                </Card.Title>
                <Card.Description className="text-body-4 text-metal-700">

                  Referral Program: Implement a referral program where existing members receive discounts or free meals for referring new members.

                </Card.Description>
              </Card.Container>
              <Card.Container tag="ul" className="my-4 space-y-4">
                <Card.List className="flex items-center gap-1.5">
                  <CheckCircle size={24} color="#EA580C" />
                  <span className="text-body-4 text-metal-700">
                    {keyf1}
                  </span>
                </Card.List>
                <Card.List className="flex items-center gap-1.5">
                  <CheckCircle size={24} color="#EA580C" />
                  <span className="text-body-4 text-metal-700">
                    {keyf2}
                  </span>
                </Card.List>
                <Card.List className="flex items-center gap-1.5">
                  <CheckCircle size={24} color="#EA580C" />
                  <span className="text-body-4 text-metal-700">
                    {keyf3}
                  </span>
                </Card.List>
                <Card.List className="flex items-center gap-1.5">
                  <CheckCircle size={24} color="#EA580C" />
                  <span className="text-body-4 text-metal-700">
                    {keyf4}
                  </span>
                </Card.List>
                <Card.List className="flex items-center gap-1.5">
                  <CheckCircle size={24} color="#EA580C" />
                  <span className="text-body-4 text-metal-700">
                    {keyf5}
                  </span>
                </Card.List>
                <Card.List className="flex items-center gap-1.5">
                  <CheckCircle size={24} color="#EA580C" />
                  <span className="text-body-4 text-metal-700">
                    {keyf6}
                  </span>
                </Card.List>
              </Card.Container>
            </Card.Container>
          </Card>
        </div>
      </div>
    </div>

  );
};

export default Payment;
