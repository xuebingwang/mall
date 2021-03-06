<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <heshudong@ibenchu.com>
 * @copyright (c) 2017, notadd.com
 * @datetime 2017-05-03 15:32
 */
namespace Notadd\Mall\Handlers\Admin\Configuration\Message;

use Notadd\Foundation\Passport\Abstracts\Handler;
use Notadd\Mall\Models\Message;

/**
 * Class ListHandler.
 */
class ListHandler extends Handler
{
    /**
     * Execute Handler.
     *
     * @throws \Exception
     */
    protected function execute()
    {
        $builder = Message::query();
        $this->withCode(200)->withData($builder->get())->withMessage('');
    }
}
