import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Table,
} from "antd";

const { Option } = Select;

const FormContent = () => {
  const [form] = Form.useForm();

  const columns = [
    {
      title: "ชื่อ",
      dataIndex: "name",
    },
    {
      title: "เพศ",
      dataIndex: "gender",
    },
    {
      title: "หมายเลขโทรศัพท์มือถือ",
      dataIndex: "phone",
    },
    {
      title: "สัญชาติ",
      dataIndex: "nationality",
    },
    {
      title: "จัดการ",
      dataIndex: "actions",
      render: (_, record) => (
        <Button danger onClick={() => handleDelete(record.key)}>
          ลบข้อมูล
        </Button>
      ),
    },
  ];

  const dataSource = [];

  const handleDelete = (key: any) => {
    // Handle delete logic here
  };

  return (
    <div className="set-page">
      <Form
        form={form}
        layout="vertical"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="คำนำหน้า"
              name="prefix"
              rules={[{ required: true, message: "กรุณาเลือกคำนำหน้า" }]}
            >
              <Select placeholder="คำ...">
                <Option value="นาย">นาย</Option>
                <Option value="นางสาว">นางสาว</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="ชื่อจริง"
              name="firstName"
              rules={[{ required: true, message: "กรุณากรอกชื่อจริง" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="วันเกิด"
              name="birthDate"
              rules={[{ required: true, message: "กรุณาเลือกวันเกิด" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="สัญชาติ"
              name="nationality"
              rules={[{ required: true, message: "กรุณาเลือกสัญชาติ" }]}
            >
              <Select placeholder="กรุณาเลือก">
                <Option value="ไทย">ไทย</Option>
                <Option value="อื่นๆ">อื่นๆ</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="เลขบัตรประชาชน"
          name="idCard"
          rules={[{ required: true, message: "กรุณากรอกเลขบัตรประชาชน" }]}
        >
          <Input.Group compact>
            <Input style={{ width: "20%" }} placeholder="xxxx" />
            <Input style={{ width: "20%" }} placeholder="xxxx" />
            <Input style={{ width: "20%" }} placeholder="xxxx" />
            <Input style={{ width: "20%" }} placeholder="xxxx" />
          </Input.Group>
        </Form.Item>

        <Form.Item
          label="เพศ"
          name="gender"
          rules={[{ required: true, message: "กรุณาเลือกเพศ" }]}
        >
          <Radio.Group>
            <Radio value="male">ผู้ชาย</Radio>
            <Radio value="female">ผู้หญิง</Radio>
            <Radio value="other">ไม่ระบุ</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="หมายเลขโทรศัพท์มือถือ"
          name="phone"
          rules={[
            { required: true, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ" },
          ]}
        >
          <Input.Group compact>
            <Select defaultValue="+66">
              <Option value="+66">+66</Option>
            </Select>
            <Input style={{ width: "70%" }} placeholder="xxxx-xxxx" />
          </Input.Group>
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="หนังสือเดินทาง" name="passport">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="เงินเดือนที่คาดหวัง"
              name="salary"
              rules={[
                { required: true, message: "กรุณากรอกเงินเดือนที่คาดหวัง" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "10px" }}
          >
            ส่งข้อมูล
          </Button>
          <Button htmlType="reset">ล้างข้อมูล</Button>
        </Form.Item>
      </Form>

      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        locale={{ emptyText: "No data" }}
      />
    </div>
  );
};

export default FormContent;
