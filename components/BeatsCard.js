import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Tooltip, Space, Modal } from 'antd';
import { PlayCircleTwoTone, DollarOutlined } from '@ant-design/icons';

import logo from '../public/boots-logo.png';

export default function BeatsCard() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const titleHeader = (
    <>
      <div className="flex items-center gap-10 uppercase">
        <Image
          src={logo}
          width={100}
          height={100}
          className="rounded-xl w-14"
          alt="boots logo"
        />
        <div>Select both for extra 20% off!</div>
      </div>
      <hr />
    </>
  );

  const footerContent = (
    <div className="flex items-center justify-between uppercase font-bold mx-4">
      <div>cancel</div>
      <div>continue to payment</div>
    </div>
  );

  const bodyContent = (
    <>
      <div className="flex items-center gap-3 px-6 pt-2">
        <div className="uppercase font-bold text-[.75rem]">
          Terms &amp; Conditions
        </div>
        <p className="text-[.68rem]">
          aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae
          sint et molestiae non recusandae. Itaque earum rerum hic tenetur a
          sapiente delectus, ut aut reiciendis voluptatibus maiores alias
          consequatur aut perferendis doloribus asperiores repellat
        </p>
      </div>

      <div className="flex items-start justify-center gap-8 my-8 px-6">
        <Image
          src="https://i.redd.it/7r3d9nlxyd991.png"
          width={100}
          height={100}
          className="rounded-xl w-52"
          alt="img"
        />
        <div className="text-xs space-y-2">
          <div className="uppercase font-bold text-lg">
            Call Me on my hotline{' '}
            <span className="text-black text-sm font-thin">(1:39)</span>
          </div>
          <p className="pb-2">
            aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae
            sint et molestiae non recusandae. Itaque earum rerum hic
          </p>
          <hr />
          <div className="text-[0.85rem] pb-1">
            Select your make: <span>$00</span>
          </div>
          <Space wrap>
            <Button type="primary" size="large" danger>
              Mastered
            </Button>
            <Button size="large">Loop</Button>
            <Button size="large">Both</Button>
          </Space>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="rounded-full bg-[#f1eeea] border-[1px] border-[#1f2023] transition-colors duration-300 hover:border-[#b95f80] p-4">
        {/* <Image
          src="https://i.redd.it/7r3d9nlxyd991.png"
          width={100}
          height={100}
          className="rounded-xl w-14"
          alt="img"
        /> */}
        <div className="flex items-center gap-2">
          <div className="truncate w-[80%] mx-auto">CALL ME ON MY HOTLINE</div>

          <Tooltip title="play">
            <Button
              type="primary"
              shape="circle"
              icon={<PlayCircleTwoTone />}
            />
          </Tooltip>

          <Button type="primary" shape="round" onClick={showModal}>
            Buy $00
          </Button>
        </div>
      </div>
      <Modal
        width={800}
        open={open}
        title={titleHeader}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={footerContent}
      >
        {bodyContent}
      </Modal>
    </>
  );
}
