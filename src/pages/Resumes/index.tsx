import { ActiveBox } from "@/components/ActiveBox";
import { GlowCard } from "@/components/GlowCard";
import { useEffect, useRef, useState } from "react";
import './index.scss'
import addImg from '@/assets/img/add.png'
import { Modal } from "@/components/Modal";
import { MyInput } from "@/components/MyInput";
import { message } from 'antd';

export const Resumes = () => {
    useEffect(() => {
        document.title = "简历 - 简历积木";
    }, []);

    const [messageApi, contextHolder] = message.useMessage();

    const ContentItems = ["222", "222", "222", "222", "222", "222", "222"];

    const [isAddModal, setIsAddModal] = useState(false);

    const [titleText, setTitleText] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isAddModal) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isAddModal]);

    return (
        <div className="Resumes">
            {contextHolder}
            <ActiveBox>
                <h1>简历</h1>
            </ActiveBox>

            <div className="ContentBox">
                <GlowCard
                    className="ContentBoxItem ContentBoxItem1"
                    onClick={() => {
                        setIsAddModal(true);
                        inputRef.current?.focus();
                    }}
                >
                    <img src={addImg} alt="" />
                    <div className="ContentBoxItem1_text">
                        <p>新建简历</p>
                        <p>像搭积木一样搭建自己的简历</p>
                    </div>
                </GlowCard>

                {ContentItems.map((item, index) => (
                    <GlowCard
                        key={index}
                        className="ContentBoxItem"
                        style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                    >
                        {item}
                    </GlowCard>
                ))}
            </div>

            <Modal
                isOpen={isAddModal}
                onClose={() => { setIsAddModal(false); setTitleText('') }}
                title="新建简历"
                titleIcon={<span>+</span>}
                buttonText="新建"
                onButtonClick={() => {
                    if (!titleText.trim()) {
                        messageApi.open({
                            type: 'error',
                            content: '请输入标题！',
                        });
                        inputRef.current?.focus();
                        return;
                    }
                    setIsAddModal(false);
                    setTitleText('');
                }}
            >
                <p>标题</p>
                <MyInput
                    ref={inputRef}
                    value={titleText}
                    className="titleInput"
                    onChange={(e) => setTitleText(e.target.value)}
                />
            </Modal>
        </div>
    )
}