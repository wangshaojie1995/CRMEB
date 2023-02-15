<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: live/business/relay_source.proto

namespace Volc\Service\Live\Models\Business;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Live.Models.Business.RelaySourceGroupItemV2</code>
 */
class RelaySourceGroupItemV2 extends \Google\Protobuf\Internal\Message
{
    /**
     * 回源地址数组
     *
     * Generated from protobuf field <code>repeated string RelaySourceDomainList = 1;</code>
     */
    private $RelaySourceDomainList;
    /**
     * 回源参数。
     *
     * Generated from protobuf field <code>map<string, string> RelaySourceParams = 2;</code>
     */
    private $RelaySourceParams;
    /**
     * 回源协议，目前只支持以下两种：<li>rmtp <li>flv。
     *
     * Generated from protobuf field <code>string RelaySourceProtocol = 3;</code>
     */
    protected $RelaySourceProtocol = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string[]|\Google\Protobuf\Internal\RepeatedField $RelaySourceDomainList
     *           回源地址数组
     *     @type array|\Google\Protobuf\Internal\MapField $RelaySourceParams
     *           回源参数。
     *     @type string $RelaySourceProtocol
     *           回源协议，目前只支持以下两种：<li>rmtp <li>flv。
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Live\Models\GPBMetadata\RelaySource::initOnce();
        parent::__construct($data);
    }

    /**
     * 回源地址数组
     *
     * Generated from protobuf field <code>repeated string RelaySourceDomainList = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRelaySourceDomainList()
    {
        return $this->RelaySourceDomainList;
    }

    /**
     * 回源地址数组
     *
     * Generated from protobuf field <code>repeated string RelaySourceDomainList = 1;</code>
     * @param string[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRelaySourceDomainList($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->RelaySourceDomainList = $arr;

        return $this;
    }

    /**
     * 回源参数。
     *
     * Generated from protobuf field <code>map<string, string> RelaySourceParams = 2;</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getRelaySourceParams()
    {
        return $this->RelaySourceParams;
    }

    /**
     * 回源参数。
     *
     * Generated from protobuf field <code>map<string, string> RelaySourceParams = 2;</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setRelaySourceParams($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->RelaySourceParams = $arr;

        return $this;
    }

    /**
     * 回源协议，目前只支持以下两种：<li>rmtp <li>flv。
     *
     * Generated from protobuf field <code>string RelaySourceProtocol = 3;</code>
     * @return string
     */
    public function getRelaySourceProtocol()
    {
        return $this->RelaySourceProtocol;
    }

    /**
     * 回源协议，目前只支持以下两种：<li>rmtp <li>flv。
     *
     * Generated from protobuf field <code>string RelaySourceProtocol = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setRelaySourceProtocol($var)
    {
        GPBUtil::checkString($var, True);
        $this->RelaySourceProtocol = $var;

        return $this;
    }

}
